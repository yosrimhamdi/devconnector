git:
		git add .
		git commit -m "$m"
		git push origin master

heroku: git
		git push heroku master