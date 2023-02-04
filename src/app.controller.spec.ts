import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('App e2e tests', () => {
  let appController: AppController;

  let appCreated: INestApplication;
  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appCreated = app.createNestApplication();
    appCreated.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    appController = app.get<AppController>(AppController);
  });

  afterAll(() => {
    appCreated.close();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  it.todo('should pass');
});
