import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from '../../services/users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  const url = 'http://localhost:8080/api/v1/sessions/register';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    // Inyectar el servicio y HttpTestingController
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no haya solicitudes pendientes al final de cada prueba.
    httpMock.verify();
  });

  it('should register a user successfully', () => {
    //defino datos de entrada y salida
    const user = { email: 'igna@mh.com', password: 'hola1234' };
    const response = { message: 'REGISTERED' };
    //utilizo el servicio y realizo la comprobación
    service.register(user).subscribe(
      (response) => expect(response.message).toBe('REGISTERED'),
      (error) =>
        fail('Expected a successful register, but got an error instead')
    );
    //intercepto la solicitud del serivicio para simular una solicitud HTTP
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush(response);
  });

  it('should fail to register a user with incorrect password', () => {
    //defino datos de entrada y salida
    const user = { email: 'igna@mh.com', password: 'hola12345' };
    const errorResponse = { message: 'INVALID CREDENTIALS' };
    //utilizo el servicio y realizo la comprobación
    service.register(user).subscribe(
      () => fail('Expected an error, but got a successful response'),
      (error) => expect(error.error.message).toBe('INVALID CREDENTIALS')
    );
    //intercepto la solicitud del serivicio para simular una solicitud HTTP
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    const headers = { status: 400, statusText: 'INVALID CREDENTIALS' };
    req.flush(errorResponse, headers);
  });

  it('should fail to register a user with invalid data', () => {
    //defino datos de entrada y salida
    const user = { email: '', password: '' };
    const errorResponse = { message: 'INVALID INPUT' };
    //utilizo el servicio y realizo la comprobación
    service.register(user).subscribe(
      () => fail('Expected an error, but got a successful response'),
      (error) => expect(error.error.message).toBe('INVALID INPUT')
    );
    //intercepto la solicitud del serivicio para simular una solicitud HTTP
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    const headers = { status: 400, statusText: 'INVALID INPUT' };
    req.flush(errorResponse, headers);
  });

  it('should fail to register a user due to server error', () => {
    //defino datos de entrada y salida
    const user = { email: 'igna@mh.com', password: 'hola1234' };
    const errorResponse = { message: 'API ERROR' };
    //utilizo el servicio y realizo la comprobación
    service.register(user).subscribe(
      () => fail('Expected an error, but got a successful response'),
      (error) => expect(error.error.message).toBe('API ERROR')
    );
    //intercepto la solicitud del serivicio para simular una solicitud HTTP
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    const headers = { status: 500, statusText: 'API ERROR' };
    req.flush(errorResponse, headers);
  });
});
