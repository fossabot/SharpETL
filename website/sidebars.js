/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Quick Start',
            collapsed: false,
            items: [
                'quick-start-guide',
                'docker-setup',
                'end-to-end-showcase',
                'end-to-end-showcase-postgres'
            ],
        },{
            type: 'category',
            label: 'Concept',
            collapsed: false,
            items: [
                'log-driven',
            ],
        },{
            type: 'category',
            label: 'Configuration',
            collapsed: false,
            items: [
                'encrypt-in-properties-file',
                'sql-scripts-guide',
                'datasource',
            ],
        }, {
            type: 'category',
            label: 'Excel Template',
            collapsed: false,
            items: [
                'excel-template-ods',
                'excel-template-dwd',
            ],
        }, {
            type: 'category',
            label: 'Command',
            collapsed: false,
            items: [
                'single-job-guide',
                'batch-job-guide',
            ],
        }, {
            type: 'category',
            label: 'Extension',
            collapsed: false,
            items: [
                'transformer-guide',
            ],
        }, {
            type: 'category',
            label: 'Security',
            collapsed: false,
            items: [
                'ranger-integrate',
            ],
        }
    ],
};
