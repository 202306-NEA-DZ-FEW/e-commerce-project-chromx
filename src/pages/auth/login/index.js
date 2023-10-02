import { FcGoogle } from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/navigation"
import { auth } from "@/utils/firebase"
import { useEffect } from "react"
import Head from "next/head"

function LoginPage() {
  const route = useRouter()
  const [user, loading] = useAuthState(auth)
  const googleProvider = new GoogleAuthProvider()

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      route.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      route.push("/")
    } else {
      console.log("Login")
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Chromx login</title>
        <meta
          name="description"
          content="Log in to Your Website Name and access your account. Secure and easy login process."
        />
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
              <span className="flex gap-2 items-center mt-4">
                <hr className="w-full" />
                OR
                <hr className="w-full" />
              </span>
              <div className="form-control mt-6">
                <button onClick={googleLogin} className="btn btn-secondary">
                  <FcGoogle className="text-xl" />
                  Signin with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
