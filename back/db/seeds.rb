# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

cases = Case.create([{
    title: "Case hijo de jefe",
    description: "El caso de la hija del jefe Relataré un caso real de una experiencia personal con un dilema ético",
    video: "https://www.youtube-nocookie.com/embed/3Y5IM3XnsX4?si=m3CZQMedkeRFA3vy",
    },
    {
    title: "Caso Volkswagen",
    description: "El escándalo de la Volkswagen estalló en septiembre de 2015, cuando la compañía admitió que casi 600.000 coches vendidos en Estados Unidos tenían instalado un software diseñado para cambiar los resultados de las pruebas de emisiones contaminantes de motores diesel.",
    video: "https://www.youtube.com/embed/UpWxiU9Cds0?si=ERoLASLcyQZjszfW",
    },
    {
    title: "La ética en inteligencia artificial",
    description: "La inteligencia artifical alberga grandes oportunidades en el mundo laboral, en la movilidad y en la medicina. Hoy, la Comisión Europea ha presentado sus claves éticas para desarrollar la inteligencia artificial en la Unión Europea, con el objetivo de conseguir beneficios para toda la sociedad respetando la privacidad de los datos.",
    video: "https://www.youtube-nocookie.com/embed/QWFUaDfg0Ks?si=oXV3bc9UUR4e98ys",
    },
])
