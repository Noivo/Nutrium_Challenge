# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nutritionists = Nutritionist.create([{name: "Virginínia Antunes" ,image_url:"https://i.pinimg.com/originals/b7/12/6c/b7126cc1e01f1e578ffcdf1e24324592.jpg" ,number:3458}, {name: "Pedro Torres" ,image_url:"https://i.pinimg.com/originals/b7/12/6c/b7126cc1e01f1e578ffcdf1e24324592.jpg" ,number:4252}])
clinics = Clinic.create([{name:"Clínica Médica Aliança", street: "Av. da Corredoura 151" ,parish: "Sobrosa" ,county: "Paredes" ,district:"Porto"}, {name:"Clinica Nutrição" , street:"Av. da Liberdade" ,parish:"São Lázaro" ,county:"Braga" ,district:"Braga"}])
appointments = Appointment.create([{session:"Consulta Domiciliar" ,price:35, clinic: clinics.first}, {session:"Consulta Online" ,price:30, clinic: clinics.first},{session:"Consulta Domiciliar" ,price:45, clinic: clinics.second}, {session:"Consulta Online" ,price:35, clinic: clinics.second}])
works = Work.create([{clinic_id:clinics[0].id, nutritionist_id:nutritionists[0].id}, {clinic_id:clinics[1].id, nutritionist_id:nutritionists[1].id}])
