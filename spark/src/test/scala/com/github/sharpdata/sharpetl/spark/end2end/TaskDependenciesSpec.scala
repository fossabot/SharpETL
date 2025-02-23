package com.github.sharpdata.sharpetl.spark.end2end

import com.github.sharpdata.sharpetl.core.util.WorkflowReader
import ETLSuit.runJob
import com.github.sharpdata.sharpetl.core.syntax.Workflow
import org.mockito.ArgumentMatchers.anyString
import org.mockito.MockitoSugar.{when, withObjectMocked}
import org.scalatest.DoNotDiscover

/**
 * 1. create deps(task-a, task-b, task-c(depends on task-a, task-b))
 * 2. run task-c (do nothing)
 * 3. run task-a (success)
 * 4. run task-c (do nothing)
 * 5. run task-b (success)
 * 6. run task-c (success)
 */
@DoNotDiscover
class TaskDependenciesSpec extends ETLSuit {
  override val createTableSql: String = ""
  override val targetDbName = "int_test"
  override val sourceDbName: String = "int_test"

  val firstDay = "2021-10-01 00:00:00"

  def jobParameters(jobName: String): Array[String] = Array("single-job",
    s"--name=$jobName", "--period=1440",
    "--local", s"--default-start-time=$firstDay", "--env=test", "--once")


  it("should respect to job dependencies") {
    withObjectMocked[WorkflowReader.type] {
      when(WorkflowReader.readWorkflow(anyString())).thenReturn(wf)
      // 0. run migration if needed
      runJob(jobParameters("task-0"))
    }

    // 1. run jobDependencyCheck (do nothing)
    assertThrows[JobFailedException] {
      runJob(jobParameters("jobDependencyCheck"))
    }

    withObjectMocked[WorkflowReader.type] {
      when(WorkflowReader.readWorkflow(anyString())).thenReturn(wf)
      // 2. run task-a (success)
      runJob(jobParameters("task-a"))
    }

    // 3. run jobDependencyCheck (do nothing)
    assertThrows[JobFailedException] {
      runJob(jobParameters("jobDependencyCheck"))
    }

    withObjectMocked[WorkflowReader.type] {
      when(WorkflowReader.readWorkflow(anyString())).thenReturn(wf)
      // 4. run task-b (success)
      runJob(jobParameters("task-b"))
    }

    // 5. run jobDependencyCheck (do nothing)
    runJob(jobParameters("jobDependencyCheck"))
  }
}
