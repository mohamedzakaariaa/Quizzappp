import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const Quiz = ({navigation,route}) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    console.log(data.result);
    setQuestion(data.results[questionNumber]?.question);
    setOptions(generateOptionAndShuffle(data?.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);
  useEffect(() => {
    setQuestion(questions[questionNumber]?.question);
    // setOptions(questions[questionNumber + 1]);  error
  }, [questionNumber]);
  const handleNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
    setOptions(questions[questionNumber + 1]);
  };
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const generateOptionAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    console.log(options);
    return options;
  };
  const HandleOptions = _option => {
    if (_option === questions[question.correct_answer]) {
      setScore(score + 1);
    }
    if (questionNumber !== 9) {
      setQuestionNumber(questionNumber + 1);
      // setOptions(questions[questionNumber + 1]); bydy error lma ashel da
    }
  };
  const handleShowResult = () => {
    navigation.navigate('Result', {score: score});
  };

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.questions}>
              {questionNumber + 1}.{decodeURIComponent(question)}
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => HandleOptions(options[0])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
             onPress={() => HandleOptions(options[1])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => HandleOptions(options[2])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => HandleOptions(options[3])}
            >
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* { <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> prev </Text>
            </TouchableOpacity>} */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Result')}>
              <Text style={styles.buttonText}> End </Text>
            </TouchableOpacity>
            {questionNumber !== 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextQuestion}>
                <Text style={styles.buttonText}> skip </Text>
              </TouchableOpacity>
            )}
            {questionNumber == 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowResult}>
                <Text style={styles.buttonText}> Show Result</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#e9c46a',
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#264653',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  questions: {
    fontSize: 28,
    color: '#ffffff',
  },
  option: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#f4a261',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  parent: {
    height: '100%',
  },
});
