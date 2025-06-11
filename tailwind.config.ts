import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem', // Default 16px screen padding
			screens: {
				'sm': '640px',
        'md': '768px',
        'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px' // Max container width
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // Direct TSB color access if needed
        'tsb-blue': 'hsl(var(--tsb-blue))',
        'tsb-light-blue': 'hsl(var(--tsb-light-blue))',
        'tsb-dark-blue': 'hsl(var(--tsb-dark-blue))',
        'tsb-mid-blue': 'hsl(var(--tsb-mid-blue))',
        'tsb-white': 'hsl(var(--tsb-white))',
        'tsb-neutral-grey-light': 'hsl(var(--tsb-neutral-grey-light))',
        'tsb-neutral-grey-medium': 'hsl(var(--tsb-neutral-grey-medium))',
        'tsb-dark-text': 'hsl(var(--tsb-dark-text))',
        'tsb-subtext-grey': 'hsl(var(--tsb-subtext-grey))',
        'tsb-teal-accent': 'hsl(var(--tsb-teal-accent))',

        sidebar: { // Retaining existing sidebar structure
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)', // 16px
				md: 'calc(var(--radius) - 4px)', // 12px
				sm: 'calc(var(--radius) - 8px)', // 8px
        button: '50px', // For specifically rounded buttons
        pill: '9999px', // For pill shapes like progress bar
			},
			fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: { // Adding SP-like sizes
        'xs': '0.75rem', // 12sp
        'sm': '0.875rem', // 14sp
        'base': '1rem', // 16sp
        'lg': '1.125rem', // 18sp
        'xl': '1.25rem', // 20sp
        '2xl': '1.5rem',    // 24sp
        '3xl': '1.875rem',  // 30sp
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Elevation 1 like
      },
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
} satisfies Config;