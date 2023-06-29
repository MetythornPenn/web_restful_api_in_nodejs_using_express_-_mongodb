from fastapi import FastAPI
import psycopg2

app = FastAPI()

# Connect to PostgreSQL using psycopg2
conn = psycopg2.connect(
    host='postgres',
    port='5432',
    dbname='myapp',
    user='myuser',
    password='mypassword'
)
cursor = conn.cursor()

# Create a sample table if it doesn't exist
create_table_query = """
CREATE TABLE IF NOT EXISTS samples (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
"""
cursor.execute(create_table_query)
conn.commit()

@app.get('/api/sample')
def read_samples():
    cursor.execute("SELECT * FROM samples")
    samples = cursor.fetchall()
    return {'samples': samples}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
