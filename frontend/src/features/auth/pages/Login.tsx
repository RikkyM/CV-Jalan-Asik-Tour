import bg from "@/assets/background.jpg";
import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const LoginProps = useLogin();

  return (
    <>
      <title>Login</title>
      <div className="mx-auto bg-white w-full h-full flex">
        <div className="flex-1 bg-white p-4 hidden lg:block">
          <div className="h-full w-full rounded-tl-2xl rounded-br-2xl relative overflow-hidden">
            <div>
              <img
                src={bg}
                alt="background"
                className="object-cover brightness-75 absolute inset-0 object-center w-full h-full"
              />
              <div className="absolute inset-0 flex space-y-3 justify-center text-white flex-col max-w-2xl mx-10">
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
            <div
              className="absolute top-0 right-0 h-24 w-52 bg-white rounded-bl-[3rem]
            after:content-[''] after:size-10 after:bg-transparent after:absolute after:top-0 after:-left-10 after:rounded-tr-4xl after:shadow-[0.5rem_-0.75rem_rgba(255,255,255,1)]
            before:content-[''] before:size-10 before:bg-transparent before:absolute before:right-0 before:-bottom-10 before:rounded-tr-4xl before:shadow-[0.5rem_-0.75rem_rgba(255,255,255,1)]
          "
            ></div>
            <div
              className="absolute bottom-0 left-0 h-24 w-52 bg-white rounded-tr-[3rem]
            after:content-[''] after:size-10 after:bg-transparent after:absolute after:-top-10 after:left-0 after:rounded-bl-4xl after:shadow-[-0.75rem_0.5rem_rgba(255,255,255,1)]
            before:content-[''] before:size-10 before:bg-transparent before:absolute before:-right-10 before:bottom-0 before:rounded-bl-4xl before:shadow-[-0.75rem_0.5rem_rgba(255,255,255,1)]
          "
            ></div>
          </div>
        </div>
        <section className="flex-1 p-2 flex items-center justify-center">
          <div className="bg-white mb-10 max-w-md w-full p-3 rounded space-y-5">
            <div className="relative w-full h-44 overflow-hidden rounded-xl lg:hidden">
              <img
                src={bg}
                alt="background"
                className="object-cover brightness-75 inset-0 object-center w-full h-full"
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
