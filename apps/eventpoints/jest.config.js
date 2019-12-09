module.exports = {
  name: 'eventpoints',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/eventpoints',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
