import React, { useRef, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo_centered from "../assets/images/logo_centered.svg";
import google_icon from "../assets/images/google_icon.svg";

import { Input, Label, Button } from "../components/connexion";

import { useAuth } from "../contexts/AuthContext";

const Connexion = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect to home if user is already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  // login
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      // Show the error message from Firebase
      setError(error.message);
      console.error(error.message);
    }

    setLoading(false);
  }

  // login with Google
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Erreur de connexion avec Google: ", error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* HEADER */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* LOGO */}
        <img
          className="mx-auto h-28 w-auto"
          src={logo_centered}
          alt="CheckFlow"
        />
        {/* HEADING */}
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Connectez-vous à votre compte
        </h2>
        {error && (
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
            {error} {/* Show the error message from Firebase */}
          </h2>
        )}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* ADRESSE EMAIL */}
          <div>
            <Label label={"Adresse email"} />
            <Input
              type={"email"}
              id={"email"}
              name={"email"}
              autoComplete={"email"}
              ref={emailRef}
              required
            />
          </div>

          {/* MOT DE PASSE */}
          <div>
            <Label label={"Mot de passe"} />
            <Input
              type={"password"}
              id={"password"}
              name={"password"}
              autoComplete={"current-password"}
              ref={passwordRef}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            {/* SE SOUVENIR DE MOI */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded bg-slate-900 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-white"
              >
                Se souvenir de moi
              </label>
            </div>

            {/* MOT DE PASSE OUBLIE */}
            <div className="text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          {/* BUTTON DE CONNEXION */}
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500 text-white"
              disabled={loading}
            >
              Se connecter
            </Button>
          </div>
        </form>

        <div className="mt-8">
          {/* SEPARATOR */}
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-gray-900 px-6 text-white">Ou bien</span>
            </div>
          </div>

          {/* BUTTON GOOGLE */}
          <div className="mt-6 grid grid-cols-1 gap-4">
            <Button
              as="a" // Specify that it should render as an anchor tag
              href="#"
              className="flex w-full items-center justify-center gap-3 bg-white text-gray-900 focus-visible:outline-[#1D9BF0]"
              onClick={handleGoogleLogin}
            >
              <img className="h-5 w-5" src={google_icon} alt="Google" />
              Continuer avec Google
            </Button>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <p className="mt-10 text-center text-sm text-gray-400">
          Pas encore membre?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
          >
            Commencez un essai de 14 jours
          </a>
        </p>
      </div>
    </div>
  );
};

export default Connexion;
