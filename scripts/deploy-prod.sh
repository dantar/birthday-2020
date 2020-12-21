#!/bin/bash
#set -v # do not expand variables
set -x # output
set -e # stop on error
set -u # stop if you use an uninitialized variable

TODAY=`date +%Y-%m-%d-%H-%M-%S`
echo $TODAY

HACKGIT=~/hack/git

export JAVA_HOME=/usr/lib/jvm/java-8-oracle

REMOTE="ssh dantar "

APP=birthday
APPDIR=$HACKGIT/birthday-2020
APPNAME=dantar-birthday

cd $APPDIR/$APP-rest
mvn clean install

cd $APPDIR/$APP-ng
ng build --base-href=./ --prod

$REMOTE sudo /etc/init.d/$APPNAME stop
$REMOTE cp services/$APPNAME.jar backup/services/$APPNAME-$TODAY.jar
scp $APPDIR/$APP-rest/target/$APP-rest-0.0.1-SNAPSHOT.jar dantar:services/$APPNAME.jar
$REMOTE sudo /etc/init.d/$APPNAME start

rsync --delete -varzh $APPDIR/$APP-ng/dist/$APP-ng/* dantar:/home/daniele/html/$APP/

