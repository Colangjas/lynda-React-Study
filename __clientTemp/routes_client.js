
var manifest = undefined;
function unwrapEs6Module(module) { return module.__esModule ? module.default : module }
var coreJsMiddleware = require("/home/colin/Lynda-com/React_Study/node_modules/react-server-core-middleware/index.js").coreJsMiddleware;
var coreCssMiddleware = require("/home/colin/Lynda-com/React_Study/node_modules/react-server-core-middleware/index.js").coreCssMiddleware;
module.exports = {
	middleware:[
		coreJsMiddleware(null, manifest),
		coreCssMiddleware(null, manifest),
		
	],
	routes:{
		Homepage: {
			path: "/",
			method: undefined,
			page: {
				default: function() {
					return {
						done: function(cb) {
							require.ensure("../src/index.js", function() {
								cb(unwrapEs6Module(require("../src/index.js")));
							});
						}
					};
				},
			},
		},
	}
};