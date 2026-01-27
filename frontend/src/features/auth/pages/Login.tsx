import bg from "@/assets/background.webp";
import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const LoginProps = useLogin();

  return (
    <>
      <title>Login</title>
      <div className="mx-auto flex h-full w-full bg-white">
        <div className="hidden flex-1 bg-white p-4 lg:block">
          <div className="relative h-full w-full overflow-hidden  rounded-tl-2xl rounded-br-2xl">
            <div>
              <img
                src={bg}
                alt="background"
                className="absolute inset-0 h-full w-full object-cover object-center brightness-75"
              />
              <div className="absolute inset-0 mx-10 flex max-w-2xl flex-col justify-center space-y-3 text-white">
                <h2 className="text-4xl font-semibold">
                  Jelajahi Dunia, Nikmati Kenyamanan
                </h2>
                <p>
                  Pesan penerbangan impian Anda dan temukan akomodasi terbaik
                  diseluruh dunia. Nikmati pengalaman perjalanan yang tak
                  terlupakan dengan harga terjangkau
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 h-24 w-52 rounded-bl-[3rem] bg-white before:absolute before:right-0 before:-bottom-10 before:size-10 before:rounded-tr-4xl before:bg-transparent before:shadow-[0.5rem_-0.75rem_rgba(255,255,255,1)] before:content-[''] after:absolute after:top-0 after:-left-10 after:size-10 after:rounded-tr-4xl after:bg-transparent after:shadow-[0.5rem_-0.75rem_rgba(255,255,255,1)] after:content-['']"></div>
            <div className="absolute bottom-0 left-0 h-24 w-52 rounded-tr-[3rem] bg-white before:absolute before:-right-10 before:bottom-0 before:size-10 before:rounded-bl-4xl before:bg-transparent before:shadow-[-0.75rem_0.5rem_rgba(255,255,255,1)] before:content-[''] after:absolute after:-top-10 after:left-0 after:size-10 after:rounded-bl-4xl after:bg-transparent after:shadow-[-0.75rem_0.5rem_rgba(255,255,255,1)] after:content-['']"></div>
          </div>
        </div>
        <section className="flex flex-1 items-center justify-center p-2">
          <div className="mb-10 w-full max-w-md space-y-5 rounded bg-white p-3">
            <div className="relative h-44 w-full overflow-hidden rounded-xl lg:hidden">
              <img
                src={bg}
                alt="background"
                className="inset-0 h-full w-full object-cover object-center brightness-75"
              />
            </div>
            <div>
              <h2 className="text-center text-2xl font-bold">Welcome Back</h2>
              <p className="text-center text-sm font-medium">
                Sign in to your account to continue
              </p>
            </div>
            <LoginForm {...LoginProps} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
