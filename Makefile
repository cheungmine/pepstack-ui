# THIS IS A WORK BY cheungmine@qq.com
# ALL RIGHTS RESERVED.
# LAST UPDATED: 2014-09-30
PREFIX = .

MODULE_NAME = pepstack-ui

FLEXIGRID_ENABLED = false
JQUERY_UI_ENABLED = false

SRC_DIR = ${PREFIX}/src
TEST_DIR = ${PREFIX}/test
SRC_PEPSTACKUI_DIR = ${SRC_DIR}/client
SRC_ASSETS_DIR = ${SRC_DIR}/assets

TEST_DIR = ${PREFIX}/test
BUILD_DIR = ${PREFIX}/build
DIST_DIR = ${PREFIX}/dist
DEP_DIR = ${PREFIX}/dep
BIN_DIR = ${PREFIX}/bin
SCRIPT_DIR = ${DIST_DIR}/script
DIST_ASSETS_DIR = ${DIST_DIR}/assets
CSS_DIR = ${DIST_DIR}/css
RES_DIR = ${CSS_DIR}/res

ifeq ($(FLEXIGRID_ENABLED), true)
	JQUERY_UI_DIR = ${DEP_DIR}/jquery-ui-1.9.2.custom
endif

ifeq ($(JQUERY_UI_ENABLED), true)
	FLEXIGRID_DIR = ${DEP_DIR}/flexigrid-1.1
endif

PLUGINS = $(shell ls -p ${SRC_PEPSTACKUI_DIR} | grep / | xargs)
PLUGINS_JS = $(if ${PLUGINS},$(shell find ${PLUGINS:%=${SRC_PEPSTACKUI_DIR}/%/} -name "*.js" 2> /dev/null),"")
PLUGINS_CSS = $(if ${PLUGINS},$(shell find ${PLUGINS:%=${SRC_PEPSTACKUI_DIR}/%/} -name "*.css" 2> /dev/null),"")

JS_MODULES = ${SRC_PEPSTACKUI_DIR}/header.txt\
	${SRC_PEPSTACKUI_DIR}/begin.js\
	${SRC_PEPSTACKUI_DIR}/error.js\
	${PLUGINS_JS}\
	${SRC_PEPSTACKUI_DIR}/end.js

CSS_MODULES = ${SRC_PEPSTACKUI_DIR}/header.txt\
	${PLUGINS_CSS}

ifeq ($(FLEXIGRID_ENABLED), true)
	FLEXIGRID_CSS = ${FLEXIGRID_DIR}/css/flexigrid.css
	FLEXIGRID_CSS_MIN = ${FLEXIGRID_DIR}/css/flexigrid.min.css
endif

ifeq ($(JQUERY_UI_ENABLED), true)
	JQUERY_UI_CSS = ${JQUERY_UI_DIR}/css/smoothness/jquery-ui-1.9.2.custom.css
	JQUERY_UI_CSS_MIN = ${JQUERY_UI_DIR}/css/smoothness/jquery-ui-1.9.2.custom.min.css
endif

MODULE_JS = ${MODULE_NAME}.js
MODULE_MIN_JS = ${MODULE_NAME}.min.js

MODULE = ${DIST_DIR}/script/${MODULE_JS}
MODULE_MIN = ${DIST_DIR}/script/${MODULE_MIN_JS}

MODULE_CSS = ${DIST_DIR}/css/${MODULE_NAME}.css
MODULE_CSS_MIN = ${DIST_DIR}/css/${MODULE_NAME}.min.css

MODULE_VER = `cat version.txt`

JS_ENGINE = `which node`
JS_LINT = ${JS_ENGINE} $(PREFIX)/jslint-check.js
JS_MINIFIER = ${JS_ENGINE} ${BIN_DIR}/lib/UglifyJS-master/bin/uglifyjs
CSS_MINIFIER = java -Xmx96m -jar ${BIN_DIR}/yuicompressor.jar

VER = sed s/@VERSION/${MODULE_VER}/
DATE=`git log --pretty=format:'%ad' -1`

all: clean lint update test
	@@echo ${PLUGIN_JS}
	@@echo "all built successfully!"

${DIST_DIR}:
	@@mkdir -p ${SCRIPT_DIR}/tmp

init: ${DIST_DIR} ${JS_MODULES}
	@@mkdir -p ${BUILD_DIR}
	@@mkdir -p ${SCRIPT_DIR}
	@@mkdir -p ${DIST_ASSETS_DIR}
	@@mkdir -p ${CSS_DIR}
	@@if ${JQUERY_UI_ENABLED} -eq true; then \
		@@mkdir -p ${SCRIPT_DIR}/jquery; \
		@@mkdir -p ${CSS_DIR}/jquery; \
	fi
	@@if ${FLEXIGRID_ENABLED} -eq true; then \
		@@mkdir -p ${SCRIPT_DIR}/flexigrid; \
		@@mkdir -p ${CSS_DIR}/flexigrid; \
	fi
	@@mkdir -p ${RES_DIR}
	@@cp -r ${SRC_DIR} ${BUILD_DIR}
	@@echo "building "${MODULE_NAME}" ..."
	@@echo "Enabled plugins: " $(if ${PLUGINS},"${PLUGINS:%/=%}", "None")
	@@cat ${JS_MODULES} | sed 's/@DATE/'"${DATE}"'/' | ${VER} > ${MODULE};
	@@echo ${MODULE_NAME}" built successfully"

lint: init
	@@if test ! -z ${JS_ENGINE}; then \
		echo -n "Checking against JSLint... "; \
		${JS_LINT}; \
	else \
		echo "You must have NodeJS installed to test "${MODULE_JS}" against JSLint."; \
	fi

css: init ${CSS_MODULES}
	@@echo -n "Building CSS... "
	@@cat ${CSS_MODULES} | \
		sed 's/Date:./&'"${DATE}"'/' | ${VER} > ${MODULE_CSS};
	@@echo "Success!"

min: init css
	@@if test ! -z ${JS_ENGINE}; then \
		echo -n "Minifying "${MODULE_NAME}" ..."; \
		head -18 ${MODULE} > ${MODULE_MIN}; \
		${JS_MINIFIER} ${MODULE} > ${MODULE_MIN}.tmp; \
		sed '$ s#^\( \*/\)\(.\+\)#\1\n\2;#' ${MODULE_MIN}.tmp > ${MODULE_MIN}; \
		rm -rf $(MODULE_MIN).tmp; \
		echo "Success!"; \
	else \
		echo "You must have NodeJS installed to minify "${MODULE_JS}; \
	fi
	@@echo -n "Minifying CSS... "
	@@${CSS_MINIFIER} ${MODULE_CSS} --type css -o ${MODULE_CSS_MIN}

	@@if ${JQUERY_UI_ENABLED} -eq true; then \
		${CSS_MINIFIER} ${JQUERY_UI_CSS} --type css -o ${JQUERY_UI_CSS_MIN}; \
	fi

	@@if ${FLEXIGRID_ENABLED} -eq true; then \
		${CSS_MINIFIER} ${FLEXIGRID_CSS} --type css -o ${FLEXIGRID_CSS_MIN}; \
	fi
	@@echo "Success!"

update: min jsacompress
	@@echo "-------- update "${MODULE_NAME}" --------"
	@@echo "copying " ${DEP_DIR}/prerequisite.js "to" ${SCRIPT_DIR}
	@@cp ${DEP_DIR}/prerequisite.js ${SCRIPT_DIR}
	@@echo "copying " ${DEP_DIR}/encode.js "to" ${SCRIPT_DIR}
	@@cp ${DEP_DIR}/encode.js ${SCRIPT_DIR}
	@@echo "copying " ${DEP_DIR}/security.js "to" ${SCRIPT_DIR}
	@@cp ${DEP_DIR}/security.js ${SCRIPT_DIR}

	@@cp ${SCRIPT_DIR}/tmp/${MODULE_NAME}.js ${SCRIPT_DIR}
	@@rm -rf ${SCRIPT_DIR}/tmp

	@@if ${JQUERY_UI_ENABLED} -eq true; then \
		cp -r ${JQUERY_UI_DIR}/js/* ${SCRIPT_DIR}/jquery; \
		cp -r ${JQUERY_UI_DIR}/css/* ${CSS_DIR}/jquery; \
	fi
	@@if ${FLEXIGRID_ENABLED} -eq true; then \
		cp -r ${FLEXIGRID_DIR}/js/* ${SCRIPT_DIR}/flexigrid; \
		cp -r ${FLEXIGRID_DIR}/css/* ${CSS_DIR}/flexigrid; \
	fi
	@@echo "copying res fils to" ${RES_DIR}
	@@cp -r ${PREFIX}/res/* ${RES_DIR}
	@@cp ${PREFIX}/res/images/favicon.ico ${DIST_DIR}
	@@echo "copying assets to "${DIST_ASSETS_DIR}
	@@cp -r ${SRC_ASSETS_DIR}/* ${DIST_ASSETS_DIR}

test: init
	@@echo "-------- copy test to "${DIST_DIR}" --------"
	@@cp -r ${TEST_DIR}/* ${DIST_DIR}

jsacompress:
	@@cp ${DEP_DIR}/prerequisite.js ${SCRIPT_DIR}/tmp
	@@cp ${DEP_DIR}/encode.js ${SCRIPT_DIR}/tmp
	@@cp ${DEP_DIR}/security.js ${SCRIPT_DIR}/tmp
	@@cp ${SCRIPT_DIR}/${MODULE_NAME}.js ${SCRIPT_DIR}/tmp
	@@ant

clean:
	@@echo "clean: removing directories: " ${BUILD_DIR} ${DIST_DIR}
	@@rm -rf ${BUILD_DIR}
	@@rm -rf ${DIST_DIR}

.PHONY: clean update
