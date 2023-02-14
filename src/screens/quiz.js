import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    console.log(data.results.question);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  const handleNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.questions}>qr</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}> option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}> option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}> option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}> option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> skip </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Result')}>
          <Text style={styles.buttonText}> End </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>
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
});
