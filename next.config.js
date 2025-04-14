/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    env: {
        BASE_API_URL: process.env.NODE_ENV === "development" ? "http://localhost:6000" : "https://api.ciratco.com",
        WEBSITE_URL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://ciratco.com",
        adminTokenNameInLocalStorage: "c-a-t",
        storeName: "Ciratco Store",
        adminDashboardlanguageFieldNameInLocalStorage: "ciratco-store-admin-dashboard-language",
        selectedCountryByAdmin: "ciratco-store-admin-dashboard-country",
        defaultLanguage: "en"
    },
    async headers() {
        return [
            {
                source: process.env.NODE_ENV === "development" ? "//localhost:6000/(.*)" : "//api.ciratco.com/(.*)",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://ciratco.com",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value:
                            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ]
            }
        ];
    }
}

module.exports = nextConfig;