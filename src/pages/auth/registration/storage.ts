import { TokenObtainPair } from "@/types/dto";

class IStorage {
	storage: Storage;

	constructor(storage: Storage) {
		this.storage = storage;
	}

	setTokenPair({ refresh, access }: TokenObtainPair) {
		this.storage.setItem("refresh", refresh);
		this.storage.setItem("access", access);
	}

	getToken(){
       return  {
        refresh:this.storage.getItem("refresh"),
        access:this.storage.getItem("access")
    }
    }
}
export const storage=new IStorage(localStorage)