import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountOperation } from '../models/AccountOperation/AccountOperation.model';
import { OperationDraft } from '../models/AccountOperation/draft.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountOperationsService {
  constructor(private httpClient: HttpClient) {}

  async getByAccountNumber(accountNumber: string): Promise<AccountOperation[]> {
    const observable = this.httpClient.get<AccountOperation[]>(
      `${environment.restServerUrl}/operations/${accountNumber}`
    );
    return firstValueFrom(observable);
  }

  async create(draft: OperationDraft): Promise<AccountOperation> {
    const observable = this.httpClient.post<AccountOperation>(
      `${environment.restServerUrl}/operations`,
      draft
    );
    return firstValueFrom(observable);
  }
}
