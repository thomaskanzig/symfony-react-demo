<?php

namespace App\DataFixtures;

use App\Entity\Product;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\ORM\Query\Expr\Math;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Intl\Intl;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    /**
     * @var UserPasswordHasherInterface
     */
    private $passwordHasher;

    /**
     * constructor
     *
     * @param UserPasswordHasherInterface $passwordHasher
     */
    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUser($manager);
        $this->loadProducts($manager);
    }

    /**
     * Fixtures data for user.
     *
     * @param ObjectManager $manager
     */
    private function loadUser(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('admin');
        $user->setPassword($this->passwordHasher->hashPassword(
            $user,
            'admin'
        ));
        $user->setFullName('Adam Manager');
        $user->setCreatedAt(new \DateTimeImmutable());

        $manager->persist($user);
        $manager->flush();
    }

    /**
     * Fixtures data for products.
     *
     * @param ObjectManager $manager
     */
    private function loadProducts(ObjectManager $manager)
    {
        foreach(DataFixtures::PRODUCTS as $item) {
            $product = new Product();
            $product->setArticleNumber($item['articleNumber']);
            $product->setName($item['name']);
            $product->setDescription($item['description']);
            $product->setPrice($item['price']);
            $product->setImage($item['image']);
            $product->setCreatedAt(new \DateTimeImmutable());

            $manager->persist($product);
        }

        $manager->flush();
    }
}
