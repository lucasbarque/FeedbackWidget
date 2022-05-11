import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);    

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => { 
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:img/png;base64alsfd'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should be able to submit a feedback without type', async () => { 
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:img/png;base64alsfd'
    })).rejects.toThrow();
  })

  it('should be able to submit a feedback without comment', async () => { 
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:img/png;base64alsfd'
    })).rejects.toThrow();
  })

  it('should be able to submit a feedback with an invalid screenshot', async () => { 
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'teste.jpg'
    })).rejects.toThrow();
  })
})