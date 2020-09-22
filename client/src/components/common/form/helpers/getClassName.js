export default (className, meta, responseError) => {
  if (!(meta.submitFailed && !meta.active && meta.error) || responseError) {
    return className;
  }

  return `${className} ${className}--invalid`;
};
