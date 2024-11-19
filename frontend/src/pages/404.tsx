export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Sorry, the hotel you're looking for does not exist.</p>
        <a href="/" className="mt-6 text-blue-500 underline">
          Go back to the homepage
        </a>
      </div>
    );
  }
  