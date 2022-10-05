import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.apiServerUrl}/plant/all`);
  }

  public addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(`${this.apiServerUrl}/plant/add`, plant);
  }

  public updatePlant(plant: Plant): Observable<Plant> {
    return this.http.put<Plant>(`${this.apiServerUrl}/plant/update`, plant);
  }

  public deletePlant(plantId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/plant/delete/${plantId}`);
  }
}
