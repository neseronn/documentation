<div align="center">
# Documentation
</div>

### Cloning the repository

--> Clone the repository using the command below :
```bash
git clone https://github.com/neseronn/documentation.git

```

--> Move into the directory where we have the project files : 
```bash
cd documentation

```

--> Create a virtual environment :
```bash
python -m venv .venv
```
--> Install poetry from this documentation : 
<a>https://python-poetry.org/docs/</a>

--> Activate the virtual environment :
```bash
poetry config --local virtualenvs.in-project true
poetry install
poetry shell
```

#

### Running the App

--> To run the Notes App, we use :
```bash
poetry run python manage.py runserver
```

> ⚠ Then, the development server will be started at http://127.0.0.1:8000/
