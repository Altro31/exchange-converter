import plugin from "tailwindcss/plugin"

export const animationBorderLine = plugin(({ matchUtilities, addUtilities, theme }) => {

    addUtilities({
        "@property --angle": {
            syntax: '"<angle>"',
            "initial-value": "0deg",
            inherits: "false",
        },
    })

    matchUtilities({
        "bg-gradient-conic": (value) => ({
            backgroundImage: `conic-gradient(from ${value}, var(--tw-gradient-stops))`,
            
        })
    }, {
        values: theme("gradientConicAngles")
    })
}, {
    theme: {
        gradientConicAngles: {
            0: "0deg",
            180: "180deg",
            360: "360deg",
        },
        extend: {
            keyframes: {
                "border-line": {
                    from: { "--angle": "0deg" },
                    to: { "--angle": "360deg" },
                }
            },
            animation: {
                "gradient-conic": "border-line 10s linear infinite"
            },
        }
    }
})