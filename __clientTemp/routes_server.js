
var manifest = {"jsChunksByName":{"Homepage":"Homepage.bundle.js","common":"common.bundle.js"},"jsChunksById":{"0":"Homepage.bundle.js","1":"common.bundle.js"},"cssChunksByName":{"Homepage":"Homepage.css"},"hash":"4ec928d60dc1d68e2e1c"};
function unwrapEs6Module(module) { return module.__esModule ? module.default : module }
var coreJsMiddleware = require("/home/colin/Lynda-com/React_Study/node_modules/react-server-core-middleware/index.js").coreJsMiddleware;
var coreCssMiddleware = require("/home/colin/Lynda-com/React_Study/node_modules/react-server-core-middleware/index.js").coreCssMiddleware;
module.exports = {
	middleware:[
		coreJsMiddleware("//0.0.0.0:3001/", manifest),
		coreCssMiddleware("//0.0.0.0:3001/", manifest),
		
	],
	routes:{
		Homepage: {
			path: "/",
			method: undefined,
			page: {
				default: function() {
					return {
						done: function(cb) {
							try {
								cb(unwrapEs6Module(require("../src/index.js")));
							} catch (e) {
								console.error('Failed to load page at "../src/index.js"', e.stack);
							}
						}
					};
				},
			},
		},
	}
};