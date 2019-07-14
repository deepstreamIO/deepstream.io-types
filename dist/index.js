"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL[LOG_LEVEL["DEBUG"] = 0] = "DEBUG";
    LOG_LEVEL[LOG_LEVEL["INFO"] = 1] = "INFO";
    LOG_LEVEL[LOG_LEVEL["WARN"] = 2] = "WARN";
    LOG_LEVEL[LOG_LEVEL["ERROR"] = 3] = "ERROR";
    LOG_LEVEL[LOG_LEVEL["FATAL"] = 4] = "FATAL";
    LOG_LEVEL[LOG_LEVEL["OFF"] = 100] = "OFF";
})(LOG_LEVEL = exports.LOG_LEVEL || (exports.LOG_LEVEL = {}));
class DeepstreamPlugin {
    async whenReady() { }
    async close() { }
}
exports.DeepstreamPlugin = DeepstreamPlugin;
//# sourceMappingURL=index.js.map