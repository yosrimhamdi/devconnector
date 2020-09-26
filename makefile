git:
		git add .
		git commit -m "$m"
		git push origin master
		git push heroku master
		heroku open