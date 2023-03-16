
PROJECT_NAME = RecidivismCaseStudy
PYTHON_VERSION = 3.8
PYTHON_INTERPRETER = python


## Install dependencies
requirements:
	$(PYTHON_INTERPRETER) -m pip install -U pip setuptools wheel
	$(PYTHON_INTERPRETER) -m pip install -r requirements-dev.txt


## Set up environment
create_environment:
	conda create --name $(PROJECT_NAME) python=$(PYTHON_VERSION) -y
	@echo ">>> conda env created. Activate with:\nconda activate $(PROJECT_NAME)"

## Run tests
tests:
	pytest --nbmake 0[1-6]*.ipynb
