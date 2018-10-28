func authenticate(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	user, _ := data.UserByEmail(r.PostFormValue("email"))
	if user.Password == data.Encrypt(r.PostFormValue("password")) {
		session := user.CreateSession()
		cookie := http.Cookie{
			Name: "_cookie",
			Value: session.Uuid,
			HttpOnly: true
		}

		http.SetCookie(w, &cookie)
		http.Redirect(w , r, "/", 302)
	}
	else {
		http.Redirect(w, r, "/login", 302)
	}
}