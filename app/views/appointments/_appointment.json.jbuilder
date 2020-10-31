json.extract! appointment, :id, :session, :price, :clinic_id, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)
