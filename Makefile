PROJECT_NAME = RecidivismCaseStudy
PYTHON_INTERPRETER = python

## mamba solves this environment much faster than conda; use conda if that is
## what you have
CONDA = mamba

.PHONY: tests format

create_environment:
	$(CONDA) env create -f environment.yml
	@echo ">>> conda env created. Activate with:\nconda activate $(PROJECT_NAME)"

update_environment:
	$(CONDA) env update -f environment.yml --prune

delete_environment:
	conda env remove --name $(PROJECT_NAME)

requirements:
	$(PYTHON_INTERPRETER) -m pip install -U pip setuptools wheel
	$(PYTHON_INTERPRETER) -m pip install -r requirements-dev.txt

clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete

## Format the notebooks (ruff.toml), then list lines still over the limit
## (strings and comments, which the formatter doesn't wrap).
format:
	ruff format
	ruff check --select E501 --output-format concise || true

tests:
	pytest --nbmake 0*.ipynb
