import React from 'react';
import clsx from 'clsx';
import Heading from "@theme/Heading";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import classnames from "classnames";

const AnchoredH2 = Heading("h2");

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <img className="hero__img" src={require('/assets/images/logo-big.png').default} alt="Hudi banner" /> */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/next/quick-start-guide">
             Latest Releases
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="docs/next/quick-start-guide">
              Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
    return (
        <section className="hudi-feature">
            <div className="container">
                <div>
                    <div className="wrapper">
                        <h2 className="text--center">
                            Sharp ETL Features
                        </h2>
                        <div className="hudi-feature-item text--semibold">
                            <table className="features">
                                <tbody>
                                    <tr>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                        <td>
                                            <i className={classnames("feather", `icon-zap`)}></i>
                                            TODO
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
