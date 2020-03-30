

#Created git commit.
#
#Success! Created cra at /Users/sd/Workspace/projects/ssr-light/cra
#Inside that directory, you can run several commands:
#
#  yarn start
#    Starts the development server.
#
#  yarn build
#    Bundles the app into static files for production.
#
#  yarn test
#    Starts the test runner.
#
#  yarn eject
#    Removes this tool and copies build dependencies, configuration files
#    and scripts into the app directory. If you do this, you can’t go back!
#
#We suggest that you begin by typing:
#
#  cd cra
#  yarn start
#ś
#Happy hacking!
#sd@Szymons-MacBook-Pr

prod:
	nodemon server.js

# CREATE DATABASE IF NOT EXISTS `app` /*!40100 DEFAULT CHARACTER SET utf8 */
mysql:
	(cd docker && docker-compose up -d)	

mysql_stop:
	docker stop mysql_app
	