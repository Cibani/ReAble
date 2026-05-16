from flask import Flask, request, jsonify
import spacy

app = Flask(__name__)
nlp = spacy.load("en_core_web_sm")

skills_list = ["Java", "Python", "HTML", "CSS", "JavaScript"]

def extract_skills(text):
    doc = nlp(text)
    return list(set([token.text for token in doc if token.text in skills_list]))

@app.route('/extract', methods=['POST'])
def extract():
    data = request.json
    text = data.get("text", "")
    skills = extract_skills(text)
    return jsonify({"skills": skills})

if __name__ == '__main__':
    app.run(debug=True)