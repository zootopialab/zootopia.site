import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDialog } from "../components/useDialog/useDialog";
import TextField from "../components/utils/Textfield";
import Label from "../components/utils/Lable";
import BaseInput from "../components/utils/Input";

const Login = () => {
  const { openSidebar } = useDialog();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center flex-1 h-screen min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <Image
              className="rounded-full cursor-pointer ml-44"
              src="https://tistory3.daumcdn.net/tistory/571103/attach/c87f780fad0443338143eda499b54d37"
              width={35}
              height={35}
              alt="Jiran"
            />
            <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
              Jiran Together
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <TextField
                // @ts-ignore
                id="email"
                name="email"
                label="email"
                placeholder="email"
                variant="outlined"
                fullWidth
              />
            </div>

            <div>
              <TextField
                // @ts-ignore
                id="password"
                name="password"
                label="password"
                placeholder="password"
                variant="outlined"
                fullWidth
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BaseInput
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  size="medium"
                  className="mr-2 border-gray-300 rounded "
                />
                <Label label="remember me" />
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[indigo-600] hover:text-primary"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <Button
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border-2px"
                onClick={() => router.push("/main")}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
