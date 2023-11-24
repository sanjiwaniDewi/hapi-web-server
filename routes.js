const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "Halaman tidak bisa diakses dengan method tersebut";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "Halaman tidak bisa diakses dengan method";
        },
    },
    {
        // bisa membuat path tentatif dengan menambahkan ? di akhir
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { lang } = request.query;
            const { name = "stranger" } = request.params;
            //menghandle query parameter
            if (lang == "id") {
                return `Hai ${name}`;
            }
            return `Hello ${name}`;
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        },
    },
];

module.exports = routes;
