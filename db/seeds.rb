# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Property.all.each do |u|
  10.times do |i|
    u.units.create(
      number: "unit-#{i + 1}",
      sqft: ((i + 1) * 100),
      budget: ((i + 1) * 1000),
      status: i % 3 == 0 ? "In Process" : "Not Started"
    )
  end
end

2.times do |i|
  User.create(
    email: "user-#{i + 1}@example.com",
    password: 'password',
    password_confirmation: 'password',
    first_name: "user-#{i + 1}_name",
    last_name: "user-#{i + 1}_lastname",
    default_property: "property#{i + 1}",
    phone: "806-777-777#{i + 1}",
    role: 'admin'
  )
end

User.all.each do |u|
  10.times do |i|
    u.properties.create(
      name: "Property #{i + 1}",
      street_address: "111#{i + 1} #{(i + 1) * 100} street",
      city: i % 3 == 0 ? 'Dallas' : 'Houston',
      state: 'Texas',
      zipcode: "7941#{i + 1}",
      unit_count: ((i + 1) * 10).to_s,
      year_built: "197#{i + 1}",
      ae_flood_zone: i % 3 == 0,
      msa: i % 3 == 0 ? 'Dallas' : 'Houston',
      submarket: i % 3 == 0 ? 'Dallas-sub' : 'Houston-sub',
      broker: i % 3 == 0 ? 'Al Silva' : 'Chris Young',
      analysis_year: i.even? ? '2019' : '2020',
      asking_price: ((i + 1) * 1_000_000).to_s,
      price_per_unit: '50000',
      offer_price: (((i + 1) * 1_000_000) - 500_000).to_s,
      sales_price: (((i + 1) * 1_000_000) - 500_000).to_s,
      notes: "This deal was brought by the broker and it is a motivated seller.  But this is the #{(i + 1) * 2} deal we have looked at.",
      status: i % 3 == 0 ? 'Own' : 'Offered/Lost',
      fka: i % 4 == 0 ? "Some other Name #{i + 1}" : '',
      photo: ''
    )
  end
end
