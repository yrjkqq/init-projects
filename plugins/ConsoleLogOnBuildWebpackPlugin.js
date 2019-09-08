const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    // eslint-disable-next-line no-unused-vars
    compiler.hooks.run.tap(pluginName, (compilation) => {
      // eslint-disable-next-line no-console
      console.log('The webpack build process is starting!!!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
