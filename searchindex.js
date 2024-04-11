Search.setIndex({"docnames": ["01_classification", "02_calibration", "03_fairness", "04_matrix", "05_subgroups", "06_error", "07_diy", "index"], "filenames": ["01_classification.ipynb", "02_calibration.ipynb", "03_fairness.ipynb", "04_matrix.ipynb", "05_subgroups.ipynb", "06_error.ipynb", "07_diy.ipynb", "index.md"], "titles": ["Predicting Crime", "Algorithmic Fairness", "Fairness by Gender", "Confusion matrix", "Subgroups", "Error", "DIY Classification", "Recidivism Case Study"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7], "i": [0, 1, 2, 3, 4, 5, 6, 7], "first": [0, 1, 2, 4, 5, 6, 7], "seri": [0, 1, 2, 3, 4, 5, 6], "notebook": [0, 1, 2, 3, 4, 5, 6], "make": [0, 1, 2, 3, 4, 5, 6], "up": [0, 1, 2, 3, 4, 5, 6], "case": [0, 1, 2, 3, 4, 5, 6], "studi": [0, 1, 2, 3, 4, 5, 6], "classif": [0, 1, 2, 3, 4, 5, 7], "algorithm": [0, 2, 3, 4, 5, 6, 7], "fair": [0, 3, 4, 5, 6, 7], "part": [0, 1, 2, 3, 4, 5, 6, 7], "element": [0, 1, 2, 3, 4, 5, 6, 7], "scienc": [0, 1, 2, 3, 4, 5, 6, 7], "curriculum": [0, 1, 2, 3, 4, 5, 6, 7], "click": [0, 1, 2, 3, 4, 5, 6], "here": [0, 1, 2, 3, 4, 5, 6], "run": [0, 1, 2, 3, 4, 5, 6], "colab": [0, 1, 2, 3, 4, 5, 6], "chapter": [0, 1], "next": [0, 1, 2, 4], "relat": [0, 3, 7], "an": [0, 1, 2, 3, 4], "articl": [0, 1, 2, 4, 5, 7], "publish": [0, 1, 2, 3, 4, 5, 6, 7], "propublica": [0, 1, 2, 3, 4, 5, 6, 7], "2016": [0, 1, 2, 7], "see": [0, 1, 2, 3, 4], "http": [0, 1, 3, 4, 5], "www": [0, 1], "org": [0, 1, 6], "risk": [0, 1, 2, 3, 4, 5, 7], "assess": 0, "crimin": [0, 1, 2], "sentenc": [0, 1, 2, 7], "The": [0, 2, 6], "explor": [0, 1, 2, 4, 7], "us": [0, 1, 2, 3, 4, 5, 6, 7], "justic": [0, 1, 2, 7], "system": [0, 1, 2, 7], "In": [0, 1, 2, 3, 4, 5, 6, 7], "we": [0, 1, 2, 3, 4, 5, 6, 7], "ll": [0, 1, 2, 3, 4, 5, 6, 7], "describ": [0, 1, 2, 4, 6], "comput": [0, 1, 2, 3, 4, 5, 6, 7], "statist": [0, 2, 4, 7], "evalu": [0, 1, 2, 7], "includ": [0, 1, 3, 6, 7], "review": 0, "argument": [0, 1, 2], "present": [0, 1, 2, 7], "respons": [0, 2, 7], "washington": [0, 1, 2, 7], "post": [0, 1, 2, 7], "interpret": [0, 2], "calibr": [0, 7], "curv": [0, 2, 7], "trade": [0, 1, 2, 4], "off": [0, 1, 2, 4, 7], "between": [0, 1, 2, 3, 4, 5, 7], "error": [0, 1, 2, 4, 7], "third": [2, 7], "appli": [0, 1, 2], "same": [0, 1, 2, 3, 4, 5, 6, 7], "perform": [0, 1, 2, 7], "male": [0, 1, 3, 4, 5, 6, 7], "femal": [0, 1, 3, 4, 5, 6, 7], "defend": [0, 1, 3, 4, 5, 6, 7], "start": [0, 1, 6, 7], "report": [0, 1, 2], "julia": [0, 1, 2, 7], "angwin": [0, 1, 2, 7], "jeff": [0, 1, 2, 7], "larson": [0, 1, 2, 7], "surya": [0, 1, 2, 7], "mattu": [0, 1, 2, 7], "lauren": [0, 1, 2, 7], "kirchner": [0, 1, 2, 7], "mai": [0, 1, 2], "about": [0, 1, 2, 4, 7], "tool": [0, 2, 7], "call": [0, 1, 3, 5, 7], "compa": [0, 1, 2, 3, 4, 5, 6, 7], "which": [0, 1, 2, 3, 4, 7], "some": [0, 1, 4, 7], "inform": [0, 1, 7], "decis": [0, 1, 2, 7], "should": [0, 1, 2, 3, 4, 7], "releas": [0, 1, 2, 7], "bail": [0, 1, 2, 7], "befor": [0, 1, 2, 4], "trial": 0, "how": [0, 1, 2, 3, 4, 5], "long": [0, 1, 7], "convict": 0, "imprison": 0, "whether": [0, 1, 2, 3, 4], "prison": 0, "probat": 0, "gener": [0, 1, 2, 4, 5], "score": [0, 1, 2, 3, 4, 5, 6, 7], "intend": [0, 1, 2, 7], "quantifi": [0, 1], "would": [0, 3, 4], "commit": [0, 1, 2, 7], "anoth": [0, 1, 2, 3, 5, 7], "read": [0, 1, 2, 3, 4, 5, 6], "more": [0, 1, 2, 3, 4, 5, 7], "en": [0, 1], "wikipedia": [0, 1], "wiki": [0, 1], "compas_": 0, "softwar": 0, "github": [0, 1, 3, 4, 5, 6], "com": [0, 1, 3, 4, 5], "blob": 0, "master": [0, 1, 3, 4, 5], "ipynb": 0, "author": [0, 1, 2, 3, 4, 5, 6], "public": [0, 1], "those": [0, 1, 2, 3, 4, 5], "thei": [0, 1, 2, 3, 4, 5, 7], "explain": [0, 1, 2, 4, 7], "obtain": 0, "assign": [0, 1, 2, 7], "than": [0, 1, 2, 3, 4, 7], "7": [0, 1, 2, 3, 4, 5, 6], "000": [0, 6], "peopl": [0, 1, 3, 4, 7], "arrest": [0, 1, 2], "broward": 0, "counti": 0, "florida": 0, "2013": 0, "2014": 0, "check": 0, "mani": [0, 1, 3], "were": [0, 1, 2, 4, 5, 7], "charg": [0, 1, 2, 3], "new": [0, 1, 2], "over": [0, 2, 7], "two": [0, 1, 2, 3, 4, 5, 6, 7], "year": [0, 1, 2, 3, 4, 5, 6, 7], "benchmark": 0, "creator": 0, "contain": [0, 4, 6, 7], "detail": [0, 1, 2], "filter": 0, "underli": 0, "from": [0, 1, 2, 3, 4, 5, 6, 7], "onli": [0, 1, 3], "row": [0, 1, 3, 4, 6], "repres": 0, "who": [0, 1, 2, 3, 5], "had": [0, 1, 3], "either": [0, 3], "recidiv": [0, 1, 2, 3, 4, 5], "least": 0, "outsid": 0, "correct": [0, 5], "facil": 0, "sought": 0, "determin": 0, "person": [0, 1], "been": 0, "subsequ": 0, "screen": 0, "did": [0, 1, 2, 4], "count": [0, 1, 4, 6], "traffic": 0, "ticket": 0, "municip": 0, "ordin": 0, "violat": [0, 1, 2], "recidivist": [0, 1, 3, 4, 5], "fail": 0, "appear": 0, "court": 0, "hear": 0, "later": 0, "occur": 0, "prior": 0, "If": [0, 1, 2, 3, 4, 5, 7], "you": [0, 1, 2, 3, 5, 7], "ar": [0, 1, 2, 3, 4, 5, 6, 7], "familiar": 0, "word": 0, "usual": 0, "mean": [0, 1, 2, 3, 4, 5, 6], "tendenc": 0, "relaps": 0, "behavior": [0, 3], "context": [0, 7], "within": [0, 1], "howev": [0, 1, 2], "note": [0, 1, 2, 3], "big": [0, 4], "differ": [0, 1, 2, 3, 4, 5], "being": [0, 1, 2, 3, 5, 7], "come": 0, "back": [0, 1], "issu": [0, 1, 2, 7], "well": [0, 1, 5], "among": [0, 1, 4], "find": [0, 1, 2, 3, 7], "wa": [0, 1, 2, 7], "somewhat": [0, 1], "accur": [0, 1], "coin": 0, "flip": 0, "Of": [0, 1], "deem": 0, "like": [0, 1, 2, 4, 7], "re": [0, 1, 2], "offend": 0, "61": [0, 1, 2, 3, 4, 6], "percent": [0, 1, 2, 3, 4, 6], "ani": [0, 1, 3], "forecast": 0, "made": 0, "mistak": 0, "black": [0, 1, 2, 3, 4, 5, 6, 7], "white": [0, 1, 2, 3, 4, 5, 6, 7], "roughli": [0, 1], "veri": [0, 2, 3], "wai": [0, 1, 2, 3, 5], "formula": [0, 6], "particularli": [0, 4], "flag": 0, "futur": 0, "wrongli": 0, "label": [0, 1, 2, 3, 4, 5, 7], "them": [0, 1, 2, 3, 4, 7], "almost": [0, 1, 3, 4, 5], "twice": [0, 1], "mislabel": 0, "low": [0, 1, 2, 3, 4, 5], "often": 0, "discrep": 0, "suggest": [0, 1], "racial": [0, 1, 2, 4], "bias": [0, 1, 2, 7], "sinc": [0, 1, 2], "ha": [0, 1, 2, 3, 4, 7], "wide": 0, "discuss": [0, 2, 7], "media": 0, "number": [0, 1, 3, 4], "research": 0, "have": [0, 1, 2, 3, 4, 7], "order": [0, 1, 2, 4], "origin": 0, "provok": 0, "technic": 0, "need": [0, 1, 2], "understand": [0, 1, 2, 7], "my": [0, 7], "goal": [0, 1, 2, 3, 7], "help": [0, 1], "analyz": [0, 1, 2], "base": [0, 1, 2, 7], "avail": 0, "can": [0, 1, 2, 3, 4, 5, 6, 7], "panda": [0, 1, 2, 3, 4, 5, 6, 7], "file": [0, 1, 2, 3, 4, 5, 6], "datafram": [0, 1, 3, 4, 6], "import": [0, 1, 2, 3, 4, 5, 6], "pd": [0, 1, 2, 3, 4, 5, 6], "cp": [0, 1, 2, 3, 4, 5, 6], "read_csv": [0, 1, 2, 3, 4, 5, 6], "csv": [0, 1, 2, 3, 4, 5, 6], "shape": [0, 1, 2, 3, 4, 5, 6], "7214": [0, 1, 2, 3, 4, 5, 6], "53": [0, 1, 2, 3, 4, 5, 6], "dataset": [0, 1, 2, 3, 6], "one": [0, 1, 2, 3, 4, 6], "each": [0, 1, 2, 3, 4, 5, 6], "column": [0, 1, 3, 4, 6], "supplement": 0, "It": [0, 2, 4, 5, 7], "tabl": [0, 1, 2, 3, 4], "summar": [0, 1], "result": [0, 1, 2, 3, 4, 6], "subgroup": [0, 1, 2], "classifi": [0, 1, 2, 3, 4, 5, 7], "caucasian": [0, 1, 3, 4, 5, 6], "african": [0, 1, 3, 4, 5, 6], "american": [0, 1, 3, 4, 5, 6], "For": [0, 1, 2, 3, 4, 5], "group": [0, 1, 2, 3, 5, 7], "summari": [0, 6], "sever": [0, 1, 7], "fp": [0, 3, 6], "fn": [0, 3, 6], "ppv": [0, 1, 2, 3, 4, 5, 6], "npv": [0, 1, 2, 3, 4, 5, 6], "lr": 0, "likelihood": [0, 6], "ratio": 0, "what": [0, 3, 4, 5, 7], "But": [0, 1, 2, 3, 4, 5], "let": [0, 1, 2, 3, 7], "": [0, 1, 2, 3, 4, 5, 7], "examin": 0, "recod": 4, "variabl": [4, 6], "follow": [0, 1, 2, 3, 4, 5], "function": [0, 1, 3, 4, 5, 6, 7], "displai": 0, "time": [0, 1, 2, 3, 6, 7], "def": [0, 1, 3, 4, 5, 6], "sort": 0, "return": [0, 1, 3, 4, 5, 6], "map": 0, "frequenc": 0, "value_count": [0, 4], "dropna": 0, "sort_index": [0, 1, 6], "decile_scor": [0, 1, 5, 6], "output": 0, "1": [0, 1, 2, 3, 4, 5, 6], "lowest": [0, 4, 7], "categori": [0, 4], "10": [0, 4, 5, 6], "highest": [0, 4, 7], "1440": 0, "2": [0, 1, 2, 3, 4, 5, 6], "941": 0, "3": [0, 1, 2, 3, 4, 5, 6], "747": 0, "4": [0, 1, 2, 3, 4, 5], "769": 0, "5": [0, 1, 2, 4, 5, 6], "681": 0, "6": [0, 1, 2, 3, 4, 5, 6, 7], "641": 0, "592": 0, "8": [0, 1, 2, 3, 4, 5, 6], "512": 0, "9": [0, 1, 2, 3, 4, 5, 6], "508": 0, "383": 0, "name": [0, 4, 6], "dtype": [0, 1, 4, 5, 6], "int64": [0, 6], "binari": [0, 1, 2, 3, 5, 7], "doe": [0, 2, 3], "rather": 0, "give": 0, "reflect": [0, 2, 7], "chose": 0, "threshold": [0, 1, 2, 5, 6], "defin": [0, 2, 7], "decil": 0, "below": [0, 4], "abov": [0, 1], "high": [0, 1, 2, 3, 4, 5, 7], "Their": [0, 1], "choic": 0, "arbitrari": 0, "happen": [0, 3], "other": [0, 1, 2, 3, 4, 7], "creat": 0, "boolean": 0, "high_risk": [0, 6], "true": [0, 3, 6], "respond": [0, 1, 2], "greater": [0, 4], "highrisk": [0, 5, 6], "3897": 0, "3317": 0, "two_year_recid": [0, 1, 5, 6], "indic": [0, 1], "dure": [0, 2], "period": [0, 2], "after": [0, 1, 2], "when": [0, 1, 3, 7], "0": [0, 1, 2, 3, 4, 5, 6], "3963": 0, "3251": 0, "new_charg": 0, "newcharg": 0, "cross": [0, 1, 2, 7], "tabul": [0, 7], "four": [0, 3], "crosstab": [0, 6], "2681": 0, "1282": 0, "1216": 0, "2035": 0, "left": [0, 3], "right": [0, 2, 3], "top": 0, "bottom": 0, "show": [0, 1, 2, 3, 4, 5, 6, 7], "where": [0, 1, 2, 6], "test": [0, 1, 2, 3, 4, 6, 7], "turn": [0, 1, 7], "out": [0, 1, 2, 7], "incorrect": 0, "consist": [0, 4], "so": [0, 1, 2, 3, 4], "confirm": [0, 1, 3, 4], "correctli": 0, "now": [0, 1, 2, 3, 4], "matric": [0, 2, 6], "race": [0, 1, 2, 3, 4, 5, 6], "3696": [0, 4], "asian": [0, 4], "32": [0, 1, 2, 3, 4], "2454": [0, 4], "hispan": [0, 4], "637": [0, 4], "nativ": [0, 4], "18": [0, 1, 2, 4], "377": [0, 4], "4760": 0, "And": [0, 1, 2, 3, 4, 5, 6, 7], "1139": [0, 1], "349": [0, 1], "461": [0, 1], "505": [0, 1], "3518": 0, "990": [0, 1], "805": [0, 1], "532": [0, 1], "1369": [0, 1], "go": [0, 1, 2, 3], "want": [0, 1, 2], "address": [0, 1], "try": [0, 1, 2, 4, 6], "Not": [0, 1, 2], "everyon": [0, 1, 2], "get": [0, 1, 2, 3, 7], "even": [0, 1, 2, 3], "close": [0, 1, 2], "probabl": [0, 1, 2, 3, 5, 7], "particular": [0, 1, 2], "depend": [0, 1, 2, 3], "type": [0, 1, 2, 6], "locat": [0, 1, 2], "presenc": [0, 1, 2], "wit": [0, 1, 2], "willing": [0, 1, 2], "work": [0, 1, 2, 7], "polic": [0, 1, 2], "patrol": [0, 1, 2], "investig": [0, 1, 2], "prosecutor": [0, 1, 2], "everi": [0, 1, 2], "factor": [0, 1, 2], "preval": [0, 1, 2, 3, 4, 6, 7], "higher": [0, 1, 2, 3, 4], "doesn": [0, 1, 2], "t": [0, 1, 2, 3, 4, 5], "necessarili": [0, 1, 2], "affect": [0, 1, 2], "too": [0, 1, 2, 5], "am": [0, 1, 2, 3, 4, 5], "put": [0, 1, 2], "asid": [0, 1, 2], "focu": [0, 1, 2], "pose": [0, 1, 2], "rest": [0, 1, 2], "take": [0, 3, 4], "face": [0, 1, 2], "clear": [0, 1, 2, 4, 7], "don": [0, 1, 2, 5], "previou": [0, 1, 2, 3, 4], "section": [0, 1, 2, 3, 4], "easi": 0, "along": [0, 3], "actual": [0, 1, 2, 3, 5, 6, 7], "condit": [0, 3, 6], "around": [0, 1, 5], "There": [0, 1], "univers": 0, "standard": 0, "most": [0, 1, 4], "common": [0, 1], "look": [0, 1, 3, 4], "tp": [0, 3, 6], "tn": [0, 3, 6], "down": 0, "across": [0, 1, 3], "upper": 0, "lower": [0, 1, 2, 3, 4], "surviv": [0, 1, 2, 3, 4], "numpi": [0, 3, 4, 5, 6], "np": [0, 3, 4, 5, 6], "make_matrix": [0, 1, 2, 3, 4, 6], "default": [0, 1], "pred": [0, 1, 2, 3], "axi": [0, 6], "ascend": [0, 1, 6], "inplac": [0, 6], "forward": 0, "format": 0, "matrix_whit": [0, 1, 3, 6], "matrix_black": [0, 1, 3, 6], "matrix_al": [0, 1, 2, 3, 4, 6], "lot": [0, 7], "answer": [0, 5], "question": [0, 1, 4, 5], "One": 0, "simplest": [0, 1], "overal": [0, 1, 4], "fraction": [0, 1, 2, 5], "percentag": [0, 6], "To": [0, 1, 2, 3, 4], "conveni": 0, "extract": [0, 3], "to_numpi": [0, 6], "flatten": [0, 6], "x": [0, 1, 6], "y": [0, 1, 6], "100": [0, 1, 3, 6], "65": [0, 1, 3, 4], "37288605489326": 0, "As": [0, 1, 2, 3], "distinguish": 0, "distinct": 0, "becaus": [0, 1, 4, 7], "benefit": 0, "might": [0, 1, 4, 5, 7], "cost": 0, "exampl": [0, 1], "without": [0, 1, 2, 3], "predictive_valu": [0, 2, 3, 4, 6], "m": [0, 1, 3, 4, 6], "350618028338864": 0, "68": [0, 1, 3, 4], "79651013600206": 0, "69": [0, 4, 6], "character": 0, "absent": 0, "A": [0, 1, 2, 7], "detect": 0, "identifi": [0, 7], "non": [0, 1, 3, 4], "sens_spec": [0, 6], "sen": [0, 1, 6], "spec": [0, 6], "62": [0, 1, 3, 4, 6], "59612426945556": 0, "67": [0, 2, 3, 4], "65076961897553": 0, "littl": 0, "63": [0, 1, 2, 3, 4, 6], "hard": 0, "keep": [0, 7], "straight": 0, "especi": 0, "learn": [0, 7], "pp": [0, 3], "pn": [0, 3], "p": [0, 3, 5, 6], "n": [0, 3], "acc": [0, 3], "similar": [0, 1, 4], "sens": [0, 1], "both": [0, 1, 2, 3, 5, 7], "numer": 0, "denomin": 0, "similarli": 0, "instead": [0, 3, 5], "complement": 0, "misclassifi": [0, 7], "error_r": [0, 1, 3, 4, 6], "fpr": [0, 1, 2, 3, 4, 5, 6], "fnr": [0, 1, 2, 3, 4, 6], "349230381024476": 0, "37": [0, 1, 2, 3, 4, 6], "40387573054445": 0, "add": [0, 3], "just": 0, "prefer": 0, "fpn": 0, "think": [0, 7], "frame": 0, "easier": [0, 3, 4], "rememb": 0, "problemat": 0, "could": [0, 1, 2, 3], "easili": 0, "convent": 0, "discoveri": 0, "second": [0, 1, 2, 7], "suspect": 0, "recommend": 0, "avoid": 0, "also": [0, 1, 2, 3, 4, 7], "combin": 0, "relev": 0, "current": [0, 6], "ignor": [0, 1], "prev": [0, 3, 4, 6], "45": [0, 1, 3, 4, 6], "06515109509287": 0, "compute_metr": [0, 1, 2, 3, 4, 6], "index": [0, 1, 4, 5, 6], "df": [0, 1, 6], "round": 0, "compar": [0, 1, 2, 3, 4, 7], "our": [0, 1], "agre": 0, "theirs": 0, "44": [0, 1, 3, 4, 6], "28": [0, 1, 4, 6], "51": [0, 1, 2, 3, 4, 6], "23": [0, 1, 3, 4], "47": [0, 1, 2, 3, 4, 6], "59": [0, 1, 3, 4], "71": [0, 1, 3, 4], "39": [0, 1, 2, 3, 4, 6], "headlin": 0, "substanti": [0, 1, 2, 3, 4], "48": [0, 1, 4, 6], "84679665738162": 0, "27": [0, 1, 3, 4], "985270910047344": 0, "45430107526882": 0, "72256728778468": 0, "influenc": 0, "sent": 0, "seem": [0, 1, 3, 4], "clearli": [0, 3], "unfair": [0, 1, 2, 7], "complic": 0, "sam": [0, 1, 2, 7], "corbett": [0, 1, 2, 7], "davi": [0, 1, 2, 7], "emma": [0, 1, 2, 7], "pierson": [0, 1, 2, 7], "avi": [0, 1, 2, 7], "feller": [0, 1, 2, 7], "sharad": [0, 1, 2, 7], "goel": [0, 1, 2, 7], "program": [0, 1, 2, 7], "against": [0, 1, 2, 7], "washingtonpost": 0, "monkei": 0, "cage": 0, "wp": 0, "17": [0, 1, 4], "racist": 0, "cautiou": 0, "encourag": [0, 1, 2], "unpack": 0, "replic": [1, 2, 4, 7], "analysi": [1, 2, 3, 4, 5, 6, 7], "machin": [1, 2, 3, 4, 5, 6, 7], "wapo": [1, 2, 5, 7], "repositori": [1, 3, 4, 5, 7], "term": [1, 2, 3, 4, 5], "complianc": [1, 3, 4, 5], "redistribut": [1, 3, 4, 5], "cell": [1, 2, 3, 4, 5, 6], "download": [0, 1, 3, 4, 5], "directli": [1, 3, 4, 5], "raw": [1, 3, 4, 5], "wrote": [1, 2], "repeat": [1, 2], "someon": [1, 2], "predict": [1, 2, 4, 6, 7], "crime": [1, 2, 3, 7], "rate": [1, 2, 4, 5, 6, 7], "valu": [1, 2, 4, 6, 7], "northpoint": 1, "compani": 1, "claim": [1, 3, 7], "ultim": 1, "reoffend": 1, "medium": 1, "essenti": [1, 7], "thing": [1, 2, 7], "regardless": [1, 3], "seven": [1, 2], "scale": [1, 3], "60": [1, 4], "nearli": [1, 2, 5], "ident": [1, 2], "invok": 1, "definit": [1, 2, 3, 7], "fals": [1, 2, 3, 4, 5, 6], "posit": [1, 2, 3, 4, 5, 6], "neg": [1, 2, 3, 4, 6], "figur": [1, 2, 3], "equal": [1, 2, 3], "calibration_curv": [1, 2], "groupbi": [1, 4], "all": [1, 2, 3, 4, 5, 6], "separ": 1, "util": [], "decor": [1, 2, 3, 4, 5], "cal_al": [1, 2, 5], "plot": [1, 2, 3, 4, 5], "linestyl": [1, 2, 3, 4, 5], "dot": [1, 2, 3, 4, 5], "color": [1, 2, 3, 4, 5], "grai": [1, 2, 4, 5], "cal_whit": [1, 5], "cal_black": [1, 5], "xlabel": [1, 2, 3, 4, 5], "ylabel": [1, 2, 3, 4, 5], "titl": [1, 2, 3, 4, 5], "reciv": [1, 2], "v": [1, 2], "furthermor": 1, "why": [1, 3], "imagin": [1, 2, 5], "systemat": [1, 2], "riski": [1, 2], "mitig": [1, 2], "critic": [1, 2], "consid": [1, 2, 3, 5, 7], "fundament": [1, 2, 7], "tenet": [1, 2], "treatment": [1, 2], "problem": 1, "mathemat": [1, 2], "imposs": [1, 2], "confus": [1, 2, 6], "matrix": [1, 2, 6], "again": [1, 2, 3, 4], "metrics_whit": 1, "metrics_black": 1, "less": [1, 2, 3, 4, 7], "favor": 1, "abl": 1, "fix": [1, 2], "suppos": [1, 2], "do": [1, 2, 3], "effect": [1, 2, 3, 4], "loop": [1, 2, 3], "through": [1, 2, 3, 7], "possibl": [1, 2, 3, 4, 5], "accuraci": [1, 2, 4], "sweep_threshold": [1, 2], "sweep": [1, 3], "rang": [1, 3, 4, 5], "11": [1, 3, 4, 5, 6], "float": [1, 3, 4], "loc": [1, 3, 4, 5], "table_al": [1, 2], "head": 1, "nan": [1, 4], "78": [1, 4], "55": [1, 3, 4], "54": [1, 4], "74": [1, 2, 4], "43": [1, 3, 4, 6], "58": [1, 4], "c2": [1, 3, 4], "c4": [1, 3, 4], "c0": [1, 3, 4], "c1": [1, 3, 4], "table_whit": 1, "table_black": 1, "interpol": [1, 2], "given": [1, 2, 3, 4, 5, 7], "correspond": 1, "scipi": 1, "interp1d": 1, "option": 1, "pass": 1, "linear": 1, "interp": 1, "goe": 1, "estim": [1, 2], "popul": [1, 2], "arrai": [1, 2, 3, 6], "23050171": 1, "11998938": 1, "With": [1, 2], "20752868": 1, "01788384": 1, "At": [1, 2], "level": [1, 2], "26": [1, 4, 6], "66": [1, 3, 4], "73": [1, 4], "04": [1, 6], "19": [1, 4], "went": 1, "That": 1, "step": 1, "farther": 1, "introduc": [1, 7], "area": [1, 2], "under": [1, 2], "variou": [1, 4], "visual": 1, "sensit": [1, 3, 6], "versu": [1, 4], "histor": 1, "reason": 1, "receiv": [1, 2], "oper": [1, 2], "characterist": [1, 2], "matplotlib": [1, 2, 3, 4, 5], "pyplot": [1, 2, 3, 4, 5], "plt": [1, 2, 3, 4, 5], "plot_roc": [1, 2], "green": 1, "line": 1, "comparison": 1, "ideal": [1, 3], "realiti": 1, "alwai": 1, "accept": 1, "tell": [1, 3], "u": [1, 7], "much": [1, 2, 3, 4], "achiev": [1, 3, 4], "supplementari": [1, 2], "randomli": 1, "select": 1, "pair": 1, "sampl": [1, 6], "rank": 1, "e": 1, "g": 1, "success": 1, "match": 1, "its": [1, 2, 7], "slightli": [1, 2], "These": [1, 3, 4, 7], "reliabl": [1, 3], "rule": 1, "thumb": 1, "accord": [1, 2], "recent": 1, "70": [1, 2, 4, 6], "typic": 1, "satisfactori": 1, "measur": 1, "moder": 1, "sai": [1, 4, 5], "auc": 1, "ve": 1, "alreadi": 1, "simpson": 1, "simpsons_rul": 1, "integr": 1, "compute_auc": [1, 2], "7061166121516749": [1, 2], "6996145234049567": 1, "6946519102148443": 1, "handl": 1, "ti": 1, "qualit": 1, "stori": [1, 7], "impli": [1, 2, 5], "design": [1, 3, 4], "specif": [1, 3, 6], "recivid": [1, 3], "final": 1, "deriv": 1, "women": [1, 2, 4], "opposit": [1, 4], "seen": [1, 4], "far": 1, "tempt": 1, "forbid": 1, "unfortun": 1, "solv": [1, 3], "conclus": 1, "reach": 1, "human": [1, 7], "maker": 1, "addit": [0, 1], "unpredict": 1, "parol": 1, "solut": 1, "guidelin": 1, "unbias": 1, "transpar": 1, "matter": 1, "cours": [1, 7], "sometim": 1, "know": [1, 5], "direct": 1, "compens": 1, "account": 1, "serv": 1, "interest": [1, 7], "subject": 1, "secret": [1, 3], "privat": 1, "domain": 1, "profoundli": 1, "live": 1, "rel": [1, 3, 4], "rais": [1, 4], "difficult": [1, 7], "begun": 1, "recogn": 1, "hope": [1, 7], "contribut": 1, "ongo": 1, "debat": 1, "challeng": [1, 7], "cannot": [2, 7], "metric": [2, 3, 4, 6, 7], "briefli": 2, "mention": 2, "unevenli": 2, "kaplan": 2, "meier": 2, "men": [2, 4], "woman": 2, "man": 2, "fact": 2, "overlook": 2, "law": 2, "enforc": 2, "offici": 2, "method": [2, 6, 7], "81": [2, 4], "sex": [0, 2, 3, 4, 5, 6], "8066260049902967": 2, "19337399500970334": 2, "matrix_mal": [2, 3, 6], "1732": 2, "1021": 2, "994": 2, "2072": 2, "matrix_femal": [2, 3, 6], "303": [2, 4], "195": 2, "288": [2, 4], "609": 2, "metrics_mal": 2, "metrics_femal": 2, "75": [2, 3, 4, 6], "35": [2, 3, 4, 6], "36": [2, 4], "nevertheless": [2, 4], "64": [2, 4, 6], "76": [2, 4, 6], "campar": 2, "cal_mal": [2, 5], "cal_femal": [2, 5], "legend": 2, "0x7fa9bfae1690": 2, "Or": [2, 4], "graph": 2, "point": [2, 3, 4], "degre": 2, "decid": 2, "incarcer": 2, "while": [2, 7], "allow": 2, "free": 2, "table_mal": 2, "table_femal": 2, "36782883": 2, "40116329": 2, "88124668": 2, "82760429": 2, "12": [2, 4, 6], "14": [2, 4], "30": [2, 4, 6], "98": 2, "uncalibr": 2, "concord": [2, 7], "7078737271757202": 2, "6926061491859792": 2, "respect": [2, 3], "criteria": 2, "argu": 2, "compet": 2, "satisfi": 2, "better": 2, "temper": [2, 3], "copyright": [2, 3], "2020": [2, 3], "allen": [2, 3, 4, 5], "b": [2, 3], "downei": [2, 3, 4, 5], "licens": [2, 3], "attribut": [2, 3, 4, 5], "noncommerci": [2, 3, 4, 5], "sharealik": [2, 3], "intern": [2, 3, 4, 5], "cc": [2, 3, 4, 5], "BY": [2, 3, 4, 5], "nc": [2, 3, 4, 5], "sa": [2, 3], "fourth": [3, 7], "bia": [2, 3, 4, 5, 6, 7], "mi": 3, "assert": [3, 7], "proof": 3, "prove": [3, 7], "provid": 3, "three": [3, 4, 7], "independ": 3, "algebra": 3, "hand": 3, "sympi": 3, "symbol": 3, "eq": 3, "equat": 3, "eq1": 3, "displaystyl": 3, "eq2": 3, "frac": [3, 6], "eq3": 3, "eq4": 3, "eq5": 3, "eq6": 3, "express": 3, "soln1": 3, "soln2": 3, "constant_predictive_valu": [3, 4], "reshap": 3, "metrics_al": 3, "reconstruct": 3, "metrics_pr": 3, "31": [3, 4], "38": [3, 4, 6], "46": [3, 4], "except": 3, "small": [3, 4], "due": [3, 4], "approxim": 3, "hold": 3, "vari": [3, 4], "run_cpv_model": 3, "linspac": [3, 4, 5], "pred_er": [3, 4], "20349": [3, 4], "649382": [3, 4], "41": [3, 4], "49": [3, 4], "expect": [3, 4], "plot_cpv_model": [3, 4], "increas": 3, "decreas": 3, "vertic": 3, "dramat": 3, "extrem": [3, 4], "actual_": 3, "364303": 3, "454301": 3, "722567": 3, "065151": 3, "349230": 3, "403876": 3, "433983": 3, "846797": 3, "985271": 3, "cpv": [3, 4], "middl": 3, "marker": 3, "o": [3, 4], "variat": [3, 4], "held": 3, "constant_error_r": [3, 4], "run_cer_model": 3, "pred_pv": [3, 4], "596124": [3, 4], "65077": [3, 4], "50": [3, 4, 6], "56": [3, 4], "cer": 3, "plot_cer_model": [3, 4], "actual_pv": 3, "133489": 3, "187500": 3, "350618": 3, "796510": 3, "971481": 3, "045992": 3, "saw": 3, "kept": 3, "deliber": 3, "clue": 3, "698925": 3, "107023": 3, "156627": 3, "310534": 3, "420091": 3, "086814": 3, "although": [3, 4], "natur": 3, "neither": [3, 4], "blind": 3, "though": 3, "269036": 3, "746269": 3, "536317": 3, "989977": 3, "fifth": [4, 7], "found": 4, "ran": 4, "pattern": 4, "scenario": 4, "complet": [4, 7], "win": 4, "kind": 4, "compromis": 4, "ag": [0, 4, 6], "list": 4, "make_t": 4, "group_var": 4, "string": 4, "id": [4, 6], "fill": 4, "len": [4, 6], "continu": 4, "table1": 4, "21": [4, 6], "fewer": 4, "extend": 4, "predic": 4, "breakdown": 4, "table2": 4, "1395": 4, "5819": 4, "logic": 4, "age_cat": [4, 6], "25": [4, 6], "object": [4, 6], "d": 4, "younger": 4, "older": 4, "age_cat_recod": 4, "replac": 4, "table3": 4, "57": [4, 6], "1529": 4, "33": 4, "4109": 4, "16": 4, "1576": 4, "hight": 4, "still": 4, "constant": 4, "Then": 4, "table4": 4, "40": 4, "652": 4, "3044": 4, "567": 4, "1887": 4, "72": [4, 6], "103": 4, "52": 4, "534": 4, "82": 4, "22": 4, "15": 4, "310": 4, "table5": 4, "920": 4, "2194": 4, "582": 4, "390": 4, "1312": 4, "77": 4, "752": 4, "127": 4, "367": 4, "13": 4, "80": 4, "79": 4, "143": 4, "210": 4, "86": 4, "85": 4, "table6": 4, "29": [4, 6], "807": 4, "300": 4, "34": 4, "3302": 4, "1276": 4, "1241": 4, "table7": 4, "169": 4, "395": 4, "88": 4, "751": 4, "1799": 4, "42": [4, 6], "494": 4, "94": 4, "87": 4, "309": 4, "24": 4, "171": 4, "1003": 4, "581": 4, "110": 4, "304": 4, "120": 4, "173": 4, "84": 4, "all_group": 4, "concat": 4, "000000": [4, 6], "520370": 4, "648148": 4, "611111": 4, "603704": 4, "094444": 4, "623": 4, "432099": 4, "std": [4, 6], "339761": 4, "922603": 4, "655256": 4, "204490": 4, "987015": 4, "1059": 4, "278516": 4, "min": [4, 6], "200000": 4, "700000": 4, "600000": 4, "500000": 4, "375000": 4, "475000": 4, "550000": 4, "425000": 4, "350000": 4, "300000": 4, "250000": 4, "100000": 4, "575000": 4, "850000": 4, "625000": 4, "525000": 4, "max": [4, 6], "400000": 4, "min_max_metr": 4, "idx": 4, "idxmax": 4, "print": 4, "idxmin": 4, "maximumn": 4, "minimum": 4, "few": 4, "thought": 4, "strike": [4, 7], "meaning": 4, "deviat": 4, "averag": 4, "relationship": 4, "20": 4, "per": 4, "shown": 4, "lighter": 4, "plot_table_var": 4, "var": 4, "alpha": 4, "pv": 4, "axhlin": 4, "er": 4, "model": [4, 6], "exactli": 4, "sixth": [5, 7], "talk": 5, "past": 5, "version": 5, "treat": 5, "acknowledg": 5, "wonder": 5, "recid": 5, "high_risk_recid": 5, "6259612426945556": 5, "high_risk_norecid": 5, "32349230381024474": 5, "norecid": 5, "hypothet": 5, "whose": 5, "cdot": 5, "prob_highrisk_vs_prob_recid": 5, "thresh": 5, "prob_recid": 5, "highrisk_recid": 5, "highrisk_norecid": 5, "p_highrisk_recid": 5, "p_highrisk_norecid": 5, "q": 5, "323492": 5, "353739": 5, "383986": 5, "414233": 5, "444480": 5, "474727": 5, "504974": 5, "535221": 5, "565467": 5, "595714": 5, "625961": 5, "float64": [5, 6], "seventh": 6, "split": 6, "int": 6, "2164": 6, "shuffl": 6, "train": 6, "iloc": 6, "copi": 6, "5050": 6, "statsmodel": 6, "api": 6, "smf": 6, "priors_count": 6, "logit": 6, "fit": 6, "optim": 6, "termin": 6, "successfulli": 6, "621868": 6, "iter": 6, "regress": 6, "dep": 6, "No": 6, "observ": 6, "residu": 6, "2161": 6, "mle": 6, "date": 6, "thu": 6, "apr": 6, "2024": 6, "pseudo": 6, "r": 6, "squ": 6, "09738": 6, "log": 6, "1345": 6, "converg": 6, "null": 6, "1490": 6, "covari": 6, "nonrobust": 6, "llr": 6, "925e": 6, "coef": 6, "err": 6, "z": 6, "025": 6, "975": 6, "intercept": 6, "9091": 6, "148": 6, "131": 6, "618": 6, "200": 6, "0468": 6, "004": 6, "704": 6, "055": 6, "038": 6, "1506": 6, "012": 6, "816": 6, "128": 6, "174": 6, "logit_pr": 6, "452667": 6, "175459": 6, "036168": 6, "337007": 6, "456721": 6, "538439": 6, "990998": 6, "2471": 6, "2579": 6, "2782": 6, "2268": 6, "new_charge_2": 6, "newcharge2": 6, "3322": 6, "1728": 6, "2508": 6, "2542": 6, "8073267326732674": 6, "19267326732673268": 6, "1578": 6, "1001": 6, "690": 6, "1781": 6, "381": 6, "276": 6, "295": 6, "776": 6, "1036": 6, "590": 6, "280": 6, "636": 6, "1366": 6, "813": 6, "557": 6, "1341": 6, "212": 6, "188": 6, "133": 6, "440": 6, "981308": 6, "423280": 6, "186506": 6, "076083": 6, "910891": 6, "123980": 6, "276596": 6, "714637": 6, "432314": 6, "770260": 6, "235741": 6, "639053": 6, "990868": 6, "455649": 6, "120370": 6, "743733": 6, "965159": 6, "689307": 6, "653319": 6, "167035": 6, "936306": 6, "550725": 6, "788831": 6, "457348": 6, "param": 6, "619925": 6, "052066": 6, "049538": 6, "149677": 6, "587841": 6, "198587": 6, "037953": 6, "219181": 6, "last": 6, "compas_screening_d": 6, "dob": 6, "juv_fel_count": 6, "juv_misd_count": 6, "juv_other_count": 6, "days_b_screening_arrest": 6, "c_jail_in": 6, "c_jail_out": 6, "c_case_numb": 6, "c_offense_d": 6, "c_arrest_d": 6, "c_days_from_compa": 6, "c_charge_degre": 6, "c_charge_desc": 6, "is_recid": 6, "r_case_numb": 6, "r_charge_degre": 6, "r_days_from_arrest": 6, "r_offense_d": 6, "r_charge_desc": 6, "r_jail_in": 6, "r_jail_out": 6, "violent_recid": 6, "is_violent_recid": 6, "vr_case_numb": 6, "vr_charge_degre": 6, "vr_offense_d": 6, "vr_charge_desc": 6, "type_of_assess": 6, "score_text": 6, "screening_d": 6, "v_type_of_assess": 6, "v_decile_scor": 6, "v_score_text": 6, "v_screening_d": 6, "in_custodi": 6, "out_custodi": 6, "end": 6, "event": 6, "featur": 6, "isnan": 6, "sum": 6, "sklearn": 6, "model_select": 6, "train_test_split": 6, "x_train": 6, "x_test": 6, "y_train": 6, "y_test": 6, "test_siz": 6, "random_st": 6, "linear_model": 6, "logisticregress": 6, "logisticregr": 6, "jupyt": 6, "environ": 6, "pleas": 6, "rerun": 6, "html": 6, "represent": 6, "trust": 6, "On": 6, "unabl": 6, "render": 6, "load": 6, "page": 6, "nbviewer": 6, "nbsp": 6, "document": 6, "logisticregressionifittedlogisticregress": 6, "6757206208425721": 6, "cm": 6, "confusion_matrix": 6, "812": 6, "175": 6, "410": 6, "407": 6, "conclud": 7, "purpos": 7, "conflict": 7, "ethic": 7, "data": [2, 7], "readi": 7, "cover": 7, "basic": 7, "polit": 7, "align": 7, "roc": 7, "lai": 7, "support": 7, "modul": 7, "class": 7, "engag": 7, "student": 7, "olin": 7, "colleg": 7, "session": 7, "led": 7, "demonstr": 7, "harder": 7, "resist": 7, "temptat": 7, "hide": 7, "develop": 7, "process": 7, "took": 7, "wrong": 7, "me": 7, "organ": 7, "balanc": 7, "maintain": 7, "scientif": 7, "detach": 7, "tackl": 7, "topic": 7, "sight": 7, "consequ": 7, "materi": 7, "reader": 7, "teach": 7, "practic": 7, "book": 0, "instruct": 0, "demograph": 0, "clean": 0, "rcs_util": [1, 2, 3, 4, 5, 6]}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"predict": [0, 3], "crime": 0, "machin": 0, "bia": [0, 1], "replic": 0, "analysi": 0, "data": [0, 1, 3, 4, 5, 6], "arrang": 0, "confus": [0, 3], "matrix": [0, 3], "accuraci": 0, "valu": [0, 3], "sensit": 0, "specif": 0, "fals": 0, "posit": 0, "neg": 0, "rate": [0, 3], "all": 0, "metric": [0, 1], "algorithm": 1, "fair": [1, 2], "The": [1, 3, 4, 5, 7], "respons": 1, "calibr": [1, 2, 5], "matric": 1, "what": [1, 2], "would": [1, 2], "It": 1, "take": [1, 2], "roc": [1, 2], "curv": [1, 5], "concord": 1, "summari": [1, 2], "discuss": 1, "gender": 2, "male": 2, "femal": 2, "defend": 2, "auc": 2, "recreat": 3, "constant": 3, "model": 3, "error": [3, 5], "subgroup": 4, "refer": 4, "class": 4, "problem": 4, "group": 4, "intersect": 4, "revers": 4, "engin": 4, "other": 5, "dii": 6, "classif": 6, "recidiv": 7, "case": 7, "studi": 7, "notebook": 7, "slide": 7, "addit": 7}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Recidivism Case Study": [[7, "recidivism-case-study"]], "The notebooks": [[7, "the-notebooks"]], "Slides": [[7, "slides"]], "Additional notebooks": [[7, "additional-notebooks"]], "Predicting Crime": [[0, "predicting-crime"]], "Machine Bias": [[0, "machine-bias"]], "Replicating the Analysis": [[0, "replicating-the-analysis"]], "Data Bias": [[0, "data-bias"]], "Arranging the confusion matrix": [[0, "arranging-the-confusion-matrix"]], "Accuracy": [[0, "accuracy"]], "Predictive Value": [[0, "predictive-value"]], "Sensitivity and Specificity": [[0, "sensitivity-and-specificity"]], "False Positive and Negative Rates": [[0, "false-positive-and-negative-rates"]], "All Metrics": [[0, "all-metrics"]], "Algorithmic Fairness": [[1, "algorithmic-fairness"]], "Data": [[1, "data"], [3, "data"], [4, "data"], [5, "data"], [6, "data"]], "Data bias": [[1, "data-bias"]], "The Response": [[1, "the-response"]], "Calibration": [[1, "calibration"]], "Matrices and Metrics": [[1, "matrices-and-metrics"]], "What Would It Take?": [[1, "what-would-it-take"]], "ROC Curve": [[1, "roc-curve"]], "Concordance": [[1, "concordance"]], "Summary": [[1, "summary"], [2, "summary"]], "Discussion": [[1, "discussion"]], "Fairness by Gender": [[2, "fairness-by-gender"]], "Male and female defendants": [[2, "male-and-female-defendants"]], "Calibration for male and female defendants": [[2, "calibration-for-male-and-female-defendants"]], "What would it take?": [[2, "what-would-it-take"]], "ROC": [[2, "roc"]], "AUC": [[2, "auc"]], "Confusion matrix": [[3, "confusion-matrix"]], "Recreating the confusion matrix": [[3, "recreating-the-confusion-matrix"]], "The constant predictive value model": [[3, "the-constant-predictive-value-model"]], "Constant error rate model": [[3, "constant-error-rate-model"], [3, "id1"]], "Constant predictive value model": [[3, "constant-predictive-value-model"]], "Subgroups": [[4, "subgroups"]], "The reference class problem": [[4, "the-reference-class-problem"]], "Groups": [[4, "groups"]], "Intersections": [[4, "intersections"]], "Reverse engineering": [[4, "reverse-engineering"]], "Error": [[5, "error"]], "The other calibration curve": [[5, "the-other-calibration-curve"]], "DIY Classification": [[6, "diy-classification"]]}, "indexentries": {}})