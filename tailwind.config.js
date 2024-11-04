/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:"",
  theme: {
	container:{
		center:true,
		padding:"15px",
	},
	screens:{
		sm:"640px",
		md:"768px",
		lg:"960px",
		xl:"1200px",
	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {

  		colors: {
			primary: "#f4f4f4",
			accent:{
				DEFAULT:"#0a66c2",	
				hover: "#0a77c2",
				// DEFAULT:"#ff0000",	
				// hover: "#1a73e8",
			},
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
	    keyframes:{
			"accordion-down":{
				from:{height:"0"},
				to:{height:"var(--radix-accordion-content-height)"}
			},
			"accordion-up":{
				from:{height:"var(--radix-accordion-content-height)"},
				to:{height:"0"},
			},
		},
		animation:{
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
