import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'

function authenticate() {
  const auth = getAuth()

  signInAnonymously(auth).catch(function (error) {
    var errorCode = error.code
    var errorMessage = error.message
  })

  onAuthStateChanged(auth, function (user) {
    if (user) {
        console.log("Login")
    } else {
        // Logout
    }
  })
}

if (process.browser) {
  authenticate()
}