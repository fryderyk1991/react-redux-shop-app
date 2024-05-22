export const showLoginError = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "The email address is already in use.";
    case "auth/invalid-email":
      return "The email address is invalid.";
    case "auth/operation-not-allowed":
      return "Email and password sign-in is currently disabled.";
    case "auth/weak-password":
      return "The password is too weak.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/user-not-found":
      return "No user found with this email address.";
    case "auth/wrong-password":
      return "The password is incorrect.";
      case "auth/invalid-credential":
        return "The provided credentials are invalid.";
    default:
      return "An unknown error occurred. Please try again later.";
  }
};


