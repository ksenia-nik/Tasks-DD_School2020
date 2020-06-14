function defaultTask(cb) {
  console.log("Hello default task");
  cb();
}

exports.default = defaultTask