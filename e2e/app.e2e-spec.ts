import { TodoTestPage } from './app.po';

describe('todo-test App', function() {
  let page: TodoTestPage;

  beforeEach(() => {
    page = new TodoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
