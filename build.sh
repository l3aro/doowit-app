#!/bin/sh
CONFIG='config.xml'
VERSION=${VERSION:-"1.0.0"}
BUILD=${BUILD:-"1000000"}

if [ -e $CONFIG ]; then
    # sed to replace version in config.xml
    sed -i "s/\(widget.*version=\"\)\([0-9,.]*\)\"/\1${VERSION}\"/" $CONFIG
    sed -i "s/\(widget.*android-versionCode=\"\)\([0-9,.]*\)\"/\1${BUILD}\"/" $CONFIG
    sed -i "s/\(widget.*ios-CFBundleVersion=\"\)\([0-9,.]*\)\"/\1${BUILD}\"/" $CONFIG
    echo "Updated $CONFIG with version $VERSION"
else
    echo 'Could not find config.xml'
    exit 1
fi