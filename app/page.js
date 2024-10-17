"use client"

// app/page.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Utilisez ce chemin pour le routage

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirection vers le tableau de bord après le premier rendu
    router.push('/landing-page');
  }, [router]);

  return (
    <div>
      {/* <h1>Bienvenue sur notre application !</h1> */}
    </div>
  );
};

export default HomePage;

