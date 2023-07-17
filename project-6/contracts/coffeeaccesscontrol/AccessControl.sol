pragma solidity ^0.4.24;

// Importe as bibliotecas dos diferentes papéis
import "./FarmerRole.sol";
import "./DistributorRole.sol";
import "./RetailerRole.sol";
import "./ConsumerRole.sol";

contract AccessControl is FarmerRole, DistributorRole, RetailerRole, ConsumerRole {
    constructor() public {
        // O construtor do CoffeeAccessControl pode estar vazio ou conter qualquer lógica adicional necessária.
    }
}
