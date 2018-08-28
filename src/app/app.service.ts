
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, debounceTime } from 'rxjs/operators';

@Injectable()
export class AppService {

private API_URL = `https://jsonplaceholder.typicode.com/posts/42`;

constructor(private http: HttpClient) { }

public listarDadosCSV(data: any): Observable<any> {
  const url = `${this.API_URL}`;
  console.log(url);
  return this.http.post<any>(url, data).pipe(
    map((response: any) => ({
      transacoesCSV: response.transacoes.map((transacao: any) => ({
        label: `${transacao.transacao} - ${transacao.descricao}`,
        value: transacao.id
      }))
    }))
  );


 /* listar(){
    return this.http.get<Array<any>>(this.contatosUrl);
  }

  criar(contato: any){
    return this.http.post(this.contatosUrl, contato);
  }*/
}


}
