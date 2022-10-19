//exercicios feitos pela profa aqui
function Account(accountNumber, agencyNumber, amount) {
	const account = Object.create(Account.prototype);

	account.accountNumber = accountNumber;
	account.agencyNumber = agencyNumber;
	account.amount = amount;

	return account;
}

Account.prototype.credit = function credit(amount) {
	this.amount += amount;
	console.log(`O saldo atual é de R$ ${this.amount}`);
};

Account.prototype.debit = function debit(amount) {
	this.amount -= amount;
	console.log(`O saldo atual é de R$ ${this.amount}`);
};

Account.prototype.transferTo = function transferTo(
	anotherAccount,
	valorASerTransferido
) {
	if (this.amount < valorASerTransferido) {
		throw 'ERRO!!! Você não possui saldo suficiente para realizar essa operação';
	}

	this.debit(valorASerTransferido);
	anotherAccount.credit(valorASerTransferido);
};

const contaDaLuara = Account(111, 222, 1000);
const contaDaMaria = Account(444, 333, 600);

// console.log(contaDaLuara)
// console.log(contaDaMaria)

contaDaLuara.transferTo(contaDaMaria, 300);
