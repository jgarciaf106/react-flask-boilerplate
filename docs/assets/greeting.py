import sys
def blue(_str):
    return f"\033[0;33m{_str}\033[0m"
environment = sys.argv.pop(1)
if environment == "back":
    print(f"""
    This is your 🐍 backend! Terminal
    
    1. Get inside the environment by running {blue("$ pipenv shell")}
    2. Start the server by running {blue("$ pipenv run start")}
    """)
if environment == "front":
    print(f"""
    This is your 💻 front-end! Terminal
    
    1. Start webpack dev server by running {blue("$ npm run start")}
    """)